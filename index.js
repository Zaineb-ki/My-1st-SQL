const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const path = require('path');

const confidb = require('./Core/database/database');




app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index.ejs');
   

})


const port = 5000;
app.listen(port, () => {
    console.log(`the server is running on the port : ${port}`);
})


