const mongoose= require('mongoose');
// const { INTEGER } = require('sequelize/types');

const Schema = mongoose.Schema;

const productSchema= new Schema({
    id:{
        type:Number,
        required: true, unique : true
    }, name:{
        type:String,
        required: true
    }, url:{
        type:String,
        required: true
    }, location:{
        type:String,
        required: true
    }, description:{
        type:String,
        required: true
    }, _v:{
        type:Number,
        required: true
    }
})

module.exports=mongoose.model('Jobs',productSchema)










