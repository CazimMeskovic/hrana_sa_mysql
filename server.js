/* const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express
const app = express();

// Use Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if you use a different MySQL user
    password: '', // XAMPP's default is no password
    database: 'cart_db',
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to add cart items
app.post('/api/cart', (req, res) => {
    const { id, title, text, img, color, shadow, price, cartQuantity } = req.body;

    const sql = `INSERT INTO cart_items (item_id, title, text, img, color, shadow, price, cartQuantity) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
                 ON DUPLICATE KEY UPDATE 
                 cartQuantity = ?`;

    // Insert or update the cart item
    db.query(sql, [id, title, text, img, color, shadow, price, cartQuantity, cartQuantity], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Server error');
        }
        res.status(200).json({ message: 'Cart item updated successfully', result });
    });
});

// Route to get all cart items (optional)
app.get('/api/cart', (req, res) => {
    db.query('SELECT * FROM cart_items', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send('Server error');
        }
        res.status(200).json(results);
    });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
 */
/* 
import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize Express
const app = express();

// Use Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Change if you use a different MySQL user
    password: '', // XAMPP's default is no password
    database: 'cart_db',
});

// Connect to MySQL
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Route to add cart items
app.post('/api/cart', (req, res) => {
    const { id, title, text, img, color, shadow, price, cartQuantity } = req.body;

    const sql = `INSERT INTO cart_items (item_id, title, text, img, color, shadow, price, cartQuantity) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
                 ON DUPLICATE KEY UPDATE 
                 cartQuantity = ?`;

    db.query(sql, [id, title, text, img, color, shadow, price, cartQuantity, cartQuantity], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).send('Server error');
        }
        res.status(200).json({ message: 'Cart item updated successfully', result });
    });
});

// Route to get all cart items (optional)
app.get('/api/cart', (req, res) => {
    db.query('SELECT * FROM cart_items', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).send('Server error');
        }
        res.status(200).json(results);
    });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
 */

import express from 'express';
import mysql from 'mysql2';
import bodyParser from 'body-parser';
import cors from 'cors';

// Initialize Express
const app = express();

// Use Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default MySQL user
  password: '', // Default MySQL password for XAMPP
  database: 'cart_db',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Route to add cart items
app.post('/api/cart', (req, res) => {
  const { cartItems } = req.body;
  
  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ message: 'No cart items provided' });
  }

  cartItems.forEach((item) => {
    const { id, title, text, img, color, shadow, price, cartQuantity } = item;

    const sql = `INSERT INTO cart_items (item_id, title, text, img, color, shadow, price, cartQuantity) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?) 
                 ON DUPLICATE KEY UPDATE 
                 cartQuantity = ?`;

    db.query(
      sql,
      [id, title, text, img, color, shadow, price, cartQuantity, cartQuantity],
      (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          return res.status(500).send('Server error');
        }
      }
    );
  });

  res.status(200).json({ message: 'Cart items saved successfully' });
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
