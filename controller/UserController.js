const Users=require('../models/users')


exports.getUsers =(req,res)=>{
    Users.find.then(users=>{
        res.send(users)
    })
    .catch(err=>{
        console.log(err)
    })
    //  Jobs.find().then(companies=>{
    //     res.send(companies)
    // })
    // .catch(err=>{
    //     console.log(err)
    // })
}



exports.adduser=(req,res)=>{
    console.log(req.body,'user')
    

//     console.log(req.body.id)
     id=req.body.id
//     nam=req.body.name,
//     url=req.body.url,
//     location=req.body.location,
//     description=req.body.description,
//     _v=req.body._v
// const emp = new User({id:id,name:nam,url:url,location:location,description:description,_v:_v})
// emp.save()

    
    firstName=req.body.firstName,
    lastName=req.body.lastName,
    email=req.body.email,
    phone=Number(req.body.phone)

     const emp= new Users({
         id:id,
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone
    })
    emp.save()
    .then(result=>{
        console.log(result)
        res.send('successfully added')
    })
    .catch(err=>{
        console.log(err)
        res.send('Please fill all mandatory fields')
    })
}

exports.updateUsers=(req,res)=>{
    // const compa= Companies.fetchAll()

    // const update=req.params.id
    // id=req.body.id
    // nam=req.body.name,
    // url=req.body.url,                                            //update
    // location=req.body.location,
    // description=req.body.description,
    // _v=req.body._v
    // Jobs.findById(update).then(company=>{
    //     company.id=id,
    //     company.name=nam,
    //     company.url=url,
    //     company.location=location,
    //     company.description=description,
    //     company._v=_v
    //     company.save()



    const update=Number(req.params.id)
    firstName=req.body.firstName,
    lastName=req.body.lastName,
    email=req.body.email,
    phone=Number(req.body.phone)


    console.log(req.body.name,'update')
    Users.findById(update).then(result=>{
        
        result.firstName=firstName,
        result.lastName=lastName,
        result.email=email,
        result.phone=phone
        
        result.save()
        // console.log(result.name,'heloooo')
    
        res.send({
            "success":"true",
            "msg":"Users Updated Successfully"
    })
        
    })
    .catch(err=>{
        console.log(err,'heyyyy')
        res.send({
            "success":"false",
            "msg":"Check your Information"
    })
    })
}

exports.removeusers=(req,res)=>{
   
    const update=Number(req.params.id)

    // Jobs.findByIdAndRemove(update).then(result=>{
    
    // console.log(req.body.name,'update')
    Users.findByIdAndRemove(update).then(result=>{
        
        
    
        res.send('Users Successfully deleted')
        
    })
    .catch(err=>{
        console.log(err,'heyyyy')
        res.send('No user found')
    })

    

}