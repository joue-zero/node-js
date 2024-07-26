const path = require('path')


const express = require('express')
// when you access the body property from req the data will be null so
// you need a parser and applay on each request so we install body-parser
const bodyParser = require('body-parser')

const app = express() // create express app

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop')
const rootDir = require('./util/path')

app.use(bodyParser.urlencoded({extends: false}))
app.use(express.static(path.join(rootDir, 'public'))); // this means you can access these files out


app.use('/admin', adminRoutes); //  you can prefix the url
app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});
app.listen(3000) // create a server and listen