exports.home = (req, res) => {
  const tableStyle = `
    <style>
      /* CSS styles for the table */
      table {
        margin: 0 auto;
        border-collapse: collapse;
        width: 80%;
        font-family: Arial, sans-serif;
      }
      
      th, td {
        padding: 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }
      
      th {
        background-color: #007bff;
        color: #333;
        font-weight: bold;
        text-transform: uppercase;
      }
      
      tr:nth-child(odd) {
        background-color: #f9f9f9;
      }
      
      tr:nth-child(even) {
        background-color: #e9e9e9;
      }
      
      tr:hover {
        background-color: #f5f5f5;
      }
    </style>
  `;

  const tableContent = `
    <table>
      <tr>
        <th>HTTP Verbs</th>
        <th>Endpoints</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>POST</td>
        <td>/questions/create</td>
        <td>Create a new poll</td>
      </tr>
      <tr>
        <td>POST</td>
        <td>/questions/:id/options/create</td>
        <td>Add options to a specific poll</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/questions/:id/delete</td>
        <td>Delete a poll</td>
      </tr>
      <tr>
        <td>DELETE</td>
        <td>/options/:id/delete</td>
        <td>Delete an option</td>
      </tr>
      <tr>
        <td>PUT</td>
        <td>/options/:id/add_vote</td>
        <td>Cast a vote for an option</td>
      </tr>
      <tr>
        <td>GET</td>
        <td>/questions/:id</td>
        <td>View details of a poll and its options</td>
      </tr>
    </table>
  `;

  const message = `
    <html>
    <head>
        <style>
          /* CSS styles for the page */
          body {
              font-family: Arial, sans-serif;
              background-color: #f1f1f1;
              text-align: center;
              padding-top: 50px;
          }
          
          h1 {
              color: #333;
              font-size: 36px;
              margin-bottom: 20px;
          }
          
          p {
              color: #777;
              font-size: 18px;
              margin-bottom: 40px;
          }
          
          .polling-system {
              background-color: #fff;
              border-radius: 5px;
              padding: 40px;
              display: inline-block;
              box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
              max-width: 800px;
              margin: 0 auto;
          }
        </style>
        ${tableStyle}
    </head>
    <body>
        <div class="polling-system">
            <h1>Welcome to the Polling System API</h1>
            <p>This API allows you to create and manage polls with options and votes.</p>
            <p>Get started by making requests to the available endpoints.</p>
            ${tableContent}
        </div>
    </body>
    </html>
  `;

  res.status(200).send(message);
};
