const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); 

// mock
let stocks = [
  { ticker: "AAPL", companyName: "Apple Inc.", price: 178.34, id: Date.now() + 1 },
  { ticker: "GOOGL", companyName: "Alphabet Inc.", price: 2754.25, id: Date.now() + 2 },
];

app.get("/api", (req, res) => {
    res.json({ "users" : ["data1", "data2", "data3"] })
});

app.post("/stocks", (req, res) => {
    const { ticker, companyName, price } = req.body;

    if (!ticker || !companyName || !price) {
        return res.status(400).json({ error: "Invalid data" });
    }

    const newStock = { ticker, companyName, price, id: Date.now() };

    // TODO: save stock to postgre
    stocks.push(newStock);
    res.status(201).json(newStock);
})

app.get("/stocks", (req, res) => {
    res.status(200).json(stocks);
})

app.listen(5000, () => {
    console.log("started on 5000");
})

