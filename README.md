# Polling system API

Welcome to the Polling System API! This backend API allows you to create and manage polls with options and votes. It provides a range of features to handle all your polling needs. Let's dive into the details!

###  Hosted link: [Polling System API](https://polling-api-r6wh.onrender.com/)


## Polling system Features

- Create new polls
- Add options to existing polls
- Delete polls and options
- Delete an option
- Cast votes for options
- View detailed information about a poll and its options

## Installation Guide

- Clone this repository to your local machine.
- Run npm install to install all the required dependencies.
- Create an .env file in the project root directory and add your environment variables.

## Usage

- To run the Polling System API, use the following command:
    npm start

- This will start the application, and you can connect to the API using an API client such as Postman. The API will be available on port 8000.

## API Endpoints

- The Polling System API provides the following endpoints for interacting with the system:

| HTTP Verbs | Endpoints                          | Action                                 |
| ---------- | -----------------------------------| -------------------------------------- |
| POST       | /questions/create                  | Create a new poll                  |
| POST       | /questions/:id/options/create      | Add options to a specific poll         |
| DELETE     | /questions/:id/delete              | Delete a poll                          |
| DELETE     | /options/:id/delete                | Delete an option                       |
| PUT        | /options/:id/add_vote              | Cast a vote for an option              |
| GET        | /questions/:id                     | View details of a poll and its options |

## Tech stack
The Polling System API is built using the following technologies:
* NodeJS
* ExpressJS
* MongoDB
* Mongoose ODM
Feel free to explore the API and utilize its endpoints to create, manage, and interact with your polls. Enjoy the polling experience with the Polling System API!
