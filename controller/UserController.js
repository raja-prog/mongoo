const Users=require('../models/users')


exports.getUsers =(req,res)=>{
    Users.findAll().then(users=>{
        res.send(users)
    })
    .catch(err=>{
        console.log(err)
    })
}



exports.adduser=(req,res)=>{
    console.log(req.body,'user')
    
    firstName=req.body.firstName,
    lastName=req.body.lastName,
    email=req.body.email,
    phone=Number(req.body.phone)

    Users.create({
        firstName:firstName,
        lastName:lastName,
        email:email,
        phone:phone
    }).then(result=>{
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
    const update=Number(req.params.id)
    firstName=req.body.firstName,
    lastName=req.body.lastName,
    email=req.body.email,
    phone=Number(req.body.phone)


    console.log(req.body.name,'update')
    Users.findByPk(update).then(result=>{
        
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
    
    // console.log(req.body.name,'update')
    Users.findByPk(update).then(result=>{
        
        result.destroy()
    
        res.send('Users Successfully deleted')
        
    })
    .catch(err=>{
        console.log(err,'heyyyy')
        res.send('No user found')
    })

    

}