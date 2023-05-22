
exports.home = (req, res) => {
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
                    padding: 20px;
                    display: inline-block;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>
            <div class="polling-system">
                <h1>Welcome to the Polling System API</h1>
                <p>This API allows you to create and manage polls with options and votes.</p>
                <p>Get started by making requests to the available endpoints.</p>
            </div>
        </body>
        </html>
    `;
  
    res.status(200).send(message);
};
