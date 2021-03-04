const mongoose= require('mongoose');
// const { INTEGER } = require('sequelize/types');

const Schema = mongoose.Schema;

const userSchema= new Schema({


    // const fname=req.body.fname
    // const email=req.body.email
    // const lname=req.body.lname
    // const password=req.body.password
    // const confirmpassword=req.body.confirmpassword
    // const phone=req.body.phone

    // id:{
    //     type:Number,
    //     autoIncrement: true,
    //     unique:true
    // },
    fname: {
        type:String,
        required: true
    },
    lname: {
        type:String,
        required: false
    },
    email: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    confirmpassword: {
        type:String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    }

})

module.exports=mongoose.model('User', userSchema)
