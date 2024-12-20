const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/api", (req, res) => {
    res.json({ "users" : ["data1", "data2", "data3"] })
});

app.listen(5000, () => {
    console.log("started on 5000");
})