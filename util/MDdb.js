const mongodb=require('mongodb')
const MongoClient= mongodb.MongoClient

let _db;
const mongoConnect=(callback)=>{
    MongoClient.connect(
    'mongodb+srv://raja:999aaaAAA@cluster0.3xcub.mongodb.net/Nodejs?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
   
    ).then(
        result=>{
            console.log('Connected')
            _db=result.db('Nodejs')
            callback()
        }
    ).catch(err=>{
        console.log(err, 'eeerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        throw err
    })
}


const getdb= () =>{
    if(_db){
        return _db
    }
    throw 'No database found'
}

exports.mongoConnect = mongoConnect;
exports.getdb= getdb;