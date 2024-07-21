const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Pincode = require('./pincode');
const pincodeRoutes = require('./pincodeRoutes');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use('/api', pincodeRoutes);
app.use(express.static(path.join(__dirname, 'public')));


// Route for the home page
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
      body {
        padding-top: 60px;
      }
      .hero-section {
        background-color: #f8f9fa;
        padding: 60px 0;
      }
      .hero-text {
        text-align: center;
        padding: 20px;
      }
      .hero-text h1 {
        font-size: 3rem;
      }
      .hero-text p {
        font-size: 1.25rem;
      }
      .hero-button {
        margin-top: 20px;
      }
      .footer {
        background-color: #f8f9fa;
        padding: 20px 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #e9ecef;
      }
      .footer p {
        margin: 0;
      }
      .footer a {
        color: #007bff;
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Indian Pincodes API - Free</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </nav>
    
    <div class="hero-section">
      <div class="container">
        <div class="hero-text">
          <h1>Welcome to the Indian Pincodes API - Free</h1>
          <p>This API allows you to retrieve pincode details quickly and efficiently.</p>
          <a class="btn btn-primary hero-button" href="/postman_collection.json" download>Download Postman Collection of Pincodes API</a>
          <br><br>
          <p>POST API: https://indian-pincode-api.onrender.com/api/pincodes/getByPincode</p>
          <p>Payload: {"pincode":110001}</p>
          </div>
      </div>
    </div>

    <footer class="footer">
      <div class="container">
        <p>Made with ❤ by <a href="https://github.com/abhinavmukwane/" target="_blank">Abhinav</a></p>
      </div>
    </footer>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
  </body>
  </html>
  `);
});

// Connect to MongoDB Atlas
const dbURI = 'mongodb+srv://';  // Replace with your MongoDB connection string


mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB Atlas'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
