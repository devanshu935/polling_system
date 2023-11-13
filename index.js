const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes'));

// set the server to listen to requests on port 8000
app.listen(port, function(err) {
    if(err){
        console.log(`Some error occurred: ${err}`);
        return;
    }
    console.log(`Server is listening on port: ${port}`);
});