const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents/Nda');

const app = express();

const port = process.env.PORT || 5000;

let options = {
    format: 'Legal',
    border: {
        top: "2.0cm",
        bottom: "2.5cm"
    }
    
}

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), options).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));