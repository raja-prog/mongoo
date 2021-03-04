
// const { updateFun } = require('../models/companies')
const Jobs=require('../models/companies')

// const mongodb= require('mongodb')


// const Ucompanies= require('../models/updatedcompanies')


exports.getAboutus = (req,res)=>{
    console.log(req.body)
    console.log('second midleware')

    res.render('aboutus',{
        isAuthenticated: req.session.isSignup
    })
    // res.sendFile(path.join(__dirname,'../','views','aboutus.pug'))
}

exports.getcompanies =(req,res)=>{
    Jobs.find().then(companies=>{
        res.send(companies)
    })
    .catch(err=>{
        console.log(err)
    })
}

exports.getnewcompanies=(req,res)=>{
    console.log(req.body.id)
    id=req.body.id
    nam=req.body.name,
    url=req.body.url,
    location=req.body.location,
    description=req.body.description,
    _v=req.body._v
const company = new Jobs({id:id,name:nam,url:url,location:location,description:description,_v:_v})
company.save()
.then(result=>{
        console.log(result)
        res.send('successfully added')

    })
    .catch(err=>{
        console.log(err,'oooooooooooi')
        res.send('user is already exist')
    })
    
}

exports.updatecompanies=(req,res)=>{
    // const compa= Companies.fetchAll()
    const update=req.params.id
    id=req.body.id
    nam=req.body.name,
    url=req.body.url,                                            //update
    location=req.body.location,
    description=req.body.description,
    _v=req.body._v
    Jobs.findById(update).then(company=>{
        company.id=id,
        company.name=nam,
        company.url=url,
        company.location=location,
        company.description=description,
        company._v=_v
        company.save()
    }).then(result=>{
        console.log(result)
        res.send('successfully updated')

    })
    .catch(err=>{
        console.log(err,'oooooooooooi')
        res.send('wrong information')
    })


    // const companies= new Companies(id,nam,url,location,description,_v,new ObjectId(update))
    // companies.save()
    // .then(result=>{
    //         console.log(result,'updated successs')
    //         res.send('successfully updated')
    //     }).catch(err=>{
    //         console.log(err)
    //         res.send("wrong Information, Try again")
    //     })




     }


     exports.deletecompanies=(req,res)=>{
   
    const update=req.params.id                              
     
    
    Jobs.findByIdAndRemove(update).then(result=>{
        
        res.send({
            "success":"true",
            "msg":"Company Deleted Successfully"
    })
        
    })
    .catch(err=>{
        console.log(err,'heyyyy')
        res.send({
            "success":"false",
            "msg":"Check your Id"
    })
    })

    

}