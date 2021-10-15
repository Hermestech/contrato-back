const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');


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

app.get('/documents/:name', (req, res) => {
    const { name } = req.params;
    
    res.send(`Hola ${name}`)
})

app.post('/create-pdf/:name', (req, res) => {
    const { name } = req.params;

    const pdfTemplate = require(`./documents/${name}`);

    try {
        pdf.create(pdfTemplate(req.body), options).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
        
    } catch (error) {
        console.error(error)   
    }
    
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

app.listen(port, () => console.log(`Listening on port ${port}`));