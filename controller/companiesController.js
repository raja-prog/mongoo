

const path =require('path')
const Companies=require('../models/companies')
// const Ucompanies= require('../models/updatedcompanies')
 const jsonData =require('../views/companies.json')

exports.getAboutus = (req,res)=>{
    console.log(req.body)
    console.log('second midleware')

    res.render('aboutus')
    // res.sendFile(path.join(__dirname,'../','views','aboutus.pug'))
}

exports.getcompanies =(req,res)=>{
    console.log(req.body)
    console.log('companies controller')
    res.sendFile(path.join(__dirname,'../','views','companies.json'))
    // res.redirect('/')
}

exports.getnewcompanies=(req,res)=>{
    console.log(req.body.id)
    const compa=new Companies(req.body.id,req.body.name)
    compa.save()
    // jsonData.companies.push({id: req.body.id , name: req.body.name})
    res.send("New company Created")
    // res.sendFile(path.join(__dirname,'../','views','companies.json'))
    console.log(jsonData,'haaai')
}

exports.updatecompanies=(req,res)=>{
    // const compa= Companies.fetchAll()
    const update=req.params.id
    var flag=false

    jsonData.companies.map(company=>{
        
        if(company.id===update){
            // console.log('flag',company.id)
            return flag=true
        }
        

    })

    
    // console.log(req.body)
    if(flag){
        const compa=new Companies(update,req.body.name)
    compa.Edit()
    console.log(update,req.body.name,'check')
    // const ucomp=new Ucompanies(update)
    // ucomp.save()
    console.log(req.body.name)
    res.send({
        "success":"true",
        "msg":"Company Updated Successfully"
})}
    else{

        res.send({
            "success":"false",
            "msg":"Check your Id"
    })

    }

}
exports.deletecompanies=(req,res)=>{
    // const compa= Companies.fetchAll()
    const delet=req.params.id
    var flag=false

    jsonData.companies.map(company=>{
        
        if(company.id===delet){
            // console.log('flag',company.id)
            return flag=true
        }
        

    })

    
    // console.log(req.body)
    if(flag){
        const compa=new Companies(delet)
    compa.Delete()
    console.log(delet,'check')
    // const ucomp=new Ucompanies(update)
    // ucomp.save()
    console.log(req.body.name)
    res.send({
        "success":"true",
        "msg":"Company Deleted Successfully"
})}
    else{

        res.send({
            "success":"false",
            "msg":"File doesn't exist "
    })

    }

}