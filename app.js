const path = require('path')
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const mongoConnect=require('./util/MDdb').mongoConnect

const sequelize= require('./util/database')

app.use(bodyParser.urlencoded({extended: true }))
const aboutusRoute = require('./routes/aboutus')
const homeRoute=require('./routes/home')

// app.get('/', function (req, res) {
//   console.log(req)
//   res.send('Hello World!');
// });
// const expressHbs=require('express-handlebars')

// app.engine('hbs',expressHbs());
app.set('view engine', 'pug');
app.set('views', 'views')

app.use(homeRoute)

app.use(aboutusRoute)

app.use((req,res,)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})

sequelize.sync().then(result=>{
    console.log('synced')
})
.catch(err=>{
    console.log(err)
})

// mongoConnect(()=>{
    
//     app.listen(3000)
// })

mongoose.connect(
    'mongodb+srv://raja:999aaaAAA@cluster0.3xcub.mongodb.net/Nodejs?retryWrites=true&w=majority'
    ).then(result=>{
        app.listen(3000)
        console.log('successs')
        
    }).catch(err=>{
        console.log(err)
       
    })