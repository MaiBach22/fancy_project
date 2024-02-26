const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
let counter = 0;

app.get('/increment', (req, res) => {
    counter++;
    res.send(`Current count: ${counter}`);
});

app.post('/multiplyByTen', (req, res) => {
    const { number } = req.body;

    if (typeof number !== 'number') {
        return res.status(400).json({ error: 'Number is required in the request body' });
    }

    const result = number * 10;
    res.json({ result });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});