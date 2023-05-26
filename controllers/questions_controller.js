const Question = require('../models/question');
const Option = require('../models/option');

// Create a question
module.exports.createQuestion = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        message: 'Title is required to create a question',
      });
    }

    const question = await Question.create({
      title,
    });

    res.status(200).json({
      success: true,
      question,
    });
  } catch (err) {
    console.log('Error:', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// Create an option
module.exports.createOptions = async (req, res) => {
  try {
    const questionId = req.params.id;
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: 'Text is required to create an option',
      });
    }

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(400).json({
        message: 'Question not found',
      });
    }

    const option = await Option.create({
      text,
      question,
    });

    // Create a link to vote using the option's _id
    const link_to_vote = `https://polling-api-r6wh.onrender.com/options/${option.id}/add_vote`;

    option.link_to_vote = link_to_vote;

    option.save();

    // Add a reference of the option in the question's options field
    await question.updateOne({ $push: { options: option } });

    return res.status(200).json({
      success: true,
      option,
    });
  } catch (err) {
    console.log('Error:', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// Delete a question
module.exports.deleteQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;

    const question = await Question.findById(questionId);

    if (!question) {
      return res.status(400).json({
        message: 'Question not found',
      });
    }

    // If any of the options of the question have votes, it cannot be deleted
    if (question.totalVotes > 0) {
      return res.status(400).json({
        message: 'At least one of the options has votes',
      });
    }

    // Delete all the options of the question
    await Option.deleteMany({ question: questionId });

    // Delete the question
    await Question.findByIdAndDelete(questionId);

    return res.status(200).json({
      success: true,
      message: 'Question and associated options deleted successfully!',
    });
  } catch (err) {
    console.log('Error:', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// View a question and its options
module.exports.viewQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;

    // Populate the question with all of its options
    const question = await Question.findById(questionId).populate({
      path: 'options',
      model: 'Option',
    });

    if (!question) {
      return res.status(400).json({
        message: 'Question not found',
      });
    }

    return res.status(200).json({
      success: true,
      question,
    });
  } catch (err) {
    console.log('Error:', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
