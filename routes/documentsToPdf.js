const express = require('express');
const pdf = require('html-pdf');


const router = express.Router();

let options = {
    format: 'Legal',
    border: {
        top: "2.0cm",
        bottom: "2.5cm"
    }
    
}
router.get('/', (req,res) => {
    res.send('Estamos dentro')
})


router.post('/create-pdf/:name', (req, res) => {
    const { name } = req.params;

    const pdfTemplate = require(`../documents/${name}`);

    try {
        pdf.create(pdfTemplate(req.body), options).toFile(`${__dirname}/result.pdf`, (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
        
    } catch (error) {
        console.error(error)   
    }
    
});

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;