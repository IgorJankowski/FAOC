const express = require('express');
const cors = require('cors');

const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.get("/api", (req, res) => {
    res.json({ "users" : ["data1", "data2", "data3"] })
});
app.post("/stocks", async (req, res) => {
    const { ticker, companyName, price } = req.body;

    if (!ticker || !companyName || !price) {
        return res.status(400).json({ error: "Invalid data" });
    }
    try {
        console.log(ticker, companyName, price);
        const result = await pool.query(
            `INSERT INTO Stocks (ticker, company_name, price) VALUES ($1, $2, $3) RETURNING *`,
            [ticker, companyName, price]
        );

        res.status(201).json(result.rows[0]);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to add stock' });
    }
})

app.get("/stocks", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM stocks');
    res.status(200).json(result.rows);  // Send the retrieved stocks from the database
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to retrieve stocks' });
  }
});

app.listen(5000, () => {
    console.log("started on 5000");
})

