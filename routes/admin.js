const path = require('path')
// you can create a route and export it using express

const express = require('express')

const router = express.Router();

const rootDir = require('../util/path')

router.get('/add-product', (req, res) => {
   res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res) => {
    const data = req.body;
    // console.log(data)
    // res.send(`<h1>${data.title}</h1>`)
    res.redirect('/')
})

module.exports = router