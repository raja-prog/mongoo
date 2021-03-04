const Users=require('../models/users')

exports.getSignup = (req,res,next)=>{
    console.log(req.body,'sdfsdddddddddddddddddd')
    console.log('second midleware')
    // req.session.isSignup = false;
    console.log(req.session.isSignup)
    res.render('sign-up', {
        path:'/sign-up',
         isAuthenticated: req.session.isSignup
    })
    // res.sendFile(path.join(__dirname,'../','views','aboutus.pug'))
}

exports.postSignup = (req,res,next)=>{
    req.session.isSignup = true;    
    console.log('aboutusssssssss')

    const fname=req.body.fname
    const email=req.body.email
    const lname=req.body.lname
    const password=req.body.password
    const confirmpassword=req.body.confirmpassword
    const phone=req.body.phone


    // Users.findOne({email:email}).then(userDoc=>{
    //     if(userDoc){
    //         return res.redirect('/sign-up')
    //     }
    //     const user = new Users({

    //          fname:fname,
    //          email:email,
    //          lname:lname,
    //          password:password,
    //          confirmpassword:confirmpassword,
    //          phone:phone

    //     })                                                                                                                                                                                                                                                                                                                                                                                                                                                                     

    //     return user.save()



    // }).then(result=>{

    //     res.redirect('/sign-up')

    // })
    // .catch(err=>{
    //     console.log(err)
    // })
    req.session.save(err=>{
        console.log(err)
        res.redirect('/about-us')
    })

    // res.render('login', {
    //   //  path:'/sign-up',
    //      isAuthenticated: req.session.isSignup
  //  })
    

    // res.sendFile(path.join(__dirname,'../','views','aboutus.pug'))
}
