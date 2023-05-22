const Option = require('../models/option');
const Question = require('../models/question');

// Delete an option
module.exports.deleteOption = async (req, res) => {
  try {
    const optionId = req.params.id;

    const option = await Option.findById(optionId);

    if (!option) {
      return res.status(400).json({
        message: 'Option not found',
      });
    }

    // If the option has at least one vote, it cannot be deleted
    if (option.votes > 0) {
      return res.status(400).json({
        message: 'This option has at least one vote and cannot be deleted',
      });
    }

    const question = await Question.findById(option.question);

    // Remove the reference of this option from the question's options field
    await question.updateOne({ $pull: { options: optionId } });

    // Delete the option
    await Option.findByIdAndDelete(optionId);

    return res.status(200).json({
      success: true,
      message: 'Option deleted successfully!',
    });
  } catch (err) {
    console.log('Error:', err);
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};

// Increase the count of votes for an option
module.exports.addVote = async (req, res) => {
  try {
    const optionId = req.params.id;

    const option = await Option.findById(optionId);

    if (!option) {
      return res.status(400).json({
        message: 'Option not found',
      });
    }

    // Increment the value of votes for the option by one
    option.votes += 1;

    option.save();

    // Increment the value of total votes for the associated question by one
    const question = await Question.findById(option.question);
    question.totalVotes += 1;

    question.save();

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
