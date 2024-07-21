# Indian Pincode API

This is a simple Node.js API that allows you to retrieve information about Indian pincodes, cities, and states from a MongoDB database.

## Live Project

You can access the live project here: [Indian Pincode API](https://indian-pincode-api.onrender.com/)


## Prerequisites

- Node.js installed on your machine
- MongoDB database with a collection of pincodes

## Installation

1. Clone the repository:

i) update mongoDB connection string in server.js file

```bash
git clone https://github.com/abhinavmukwane/indian-pincode-api-node.js-mongoDB.git
cd indian-pincode-api-node.js-mongoDB
npm install
npm run start
```

To call API:
POST: http://localhost:3000/api/pincodes/getByPincode
Payload: {"pincode":110001}
