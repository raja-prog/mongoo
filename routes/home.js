const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('first midleware')
    res.send('<h1>Welcome</h1>')
})

module.exports=router;