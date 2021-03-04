const path = require('path')
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MDB_URL= 'mongodb+srv://raja:999aaaAAA@cluster0.3xcub.mongodb.net/Nodejs'
const session = require('express-session')
const MongoDBStore=require('connect-mongodb-session')(session)

const homeRoute=require('./routes/home')

app.use(homeRoute)

const authRoute=require('./routes/auth')


app.use(authRoute)

const aboutusRoute = require('./routes/aboutus')
app.use(aboutusRoute)

const Store= new MongoDBStore({
    uri : MDB_URL,
    collection:'sessions'
})
Store.on('error', function(error) {
    console.log(error);
  });
// const mongoConnect=require('./util/MDdb').mongoConnect

// const sequelize= require('./util/database')

app.use(bodyParser.urlencoded({extended: true }))



// app.get('/', function (req, res) {
//   console.log(req)
//   res.send('Hello World!');
// });
// const expressHbs=require('express-handlebars')

// app.engine('hbs',expressHbs());


app.set('view engine', 'ejs');
app.set('views', 'views')



app.use(express.static(__dirname + '/public'));
app.use(
    session({
        cookie:{
            httpOnly:true,  credentials:'include'
            ,maxAge:244*600*1000
        },
         secret:'my secret',
         resave:false, 
         saveUninitialized:true, 
        //  isSignup:false,
         store: Store
    })
    )
  
  
app.use((req,res,)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




// sequelize.sync().then(result=>{
//     console.log('synced')
// })
// .catch(err=>{
//     console.log(err)
// })

// mongoConnect(()=>{
    
//     app.listen(3000)
// })

mongoose.connect(
    MDB_URL
    ,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex:true
    }
    ).then(result=>{
        
        console.log('successs')
        app.listen(3000)
        console.log('successs of host')
        
    }).catch(err=>{
        console.log(err)
       
    })
// var mongoose = require("mongoose");
// mongoose.connect('mongodb+srv://raja:999aaaAAA@cluster0.3xcub.mongodb.net/Nodejs?retryWrites=true&w=majority');

// mongoose.connection.on('connected', function () {
//     mongoose.connection.db.collectionName(function (err, names) {
//         if (err) console.log(err);
//         else{
//             app.listen(3000)
//             console.log(names);
//         } 
//     });
// })