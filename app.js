const path = require('path')
var express = require('express');
var app = express();
const bodyParser = require('body-parser')
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
// app.get('/',(req,res,next)=>{
//     console.log('first midleware')
//     res.send('<h1>Vanakamda maapla</h1>')
// })

// const server = http.createServer(app)
app.listen(3000)
// , function () {
//   console.log('Example app listening on port 3000!');
// });
// server.listen(3000)