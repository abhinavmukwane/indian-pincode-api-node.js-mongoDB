const { MongoClient } = require('mongodb');
const xlsx = require('xlsx');
const path = require('path');

// Connection URL
const url = 'mongodb+srv://'; // Replace with your MongoDB connection string
const client = new MongoClient(url);

// Database Name
const dbName = 'APIMARKET'; // Replace with your database name

async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        console.log('Connected successfully to server');

        const db = client.db(dbName);
        const collection = db.collection('pincodes'); // Replace with your collection name

        // Load the Excel file
        const filePath = path.join(__dirname, 'Pincodes.xlsx'); // Replace with your Excel file name
        const workbook = xlsx.readFile(filePath);

        // Assuming the data is in the first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON
        const data = xlsx.utils.sheet_to_json(worksheet);

        // Insert data into MongoDB
        const insertResult = await collection.insertMany(data);
        console.log('Inserted documents:', insertResult.insertedCount);

    } finally {
        // Ensure that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);
