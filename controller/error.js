const path =require('path')

exports.error404=(req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'../','views','404.html'))
}
