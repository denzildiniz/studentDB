const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');

const connDB = require('./db/connect');
const student = require('./routes/student');

const port = process.env.PORT || 2000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('views',path.join(__dirname,"./views/"));
app.engine('hbs', hbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname + '/views/layouts'
}));
app.set('view engine', 'hbs')

app.use('/students',student);


const start = async () =>{
    try {
        await connDB('mongodb://localhost:27017/StudentDB')
        app.listen(port,()=>{
            console.log(`listening on port ${port}..`)
        })
    } catch (error) {
        console.log("connection failed with db")
    }
}

start();
