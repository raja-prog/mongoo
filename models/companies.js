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


// const getdb= require('../util/MDdb').getdb
// const mongodb=require('mongodb')
// class Companies {
//     constructor(id,name,url,location,description,_v,_id){
//         this.id=id,
//         this.name=name,
//         this.url=url,
//         this.location=location,
//         this.description=description,
//         this._v=_v,
//         this._id= _id ?  new mongodb.ObjectId(_id) : null
//     }
//     save(){
//         const db =getdb();
//         let dbop
//         if(this._id){
//             dbop=db.collection('companies')
//             .updateOne({_id:this._id }, { $set:this})
//         }
//         else{
//             dbop= db.collection('companies')
//             .insertOne(this)
//         }
//          return dbop.then(
//             result=>{
//                 console.log('Connected',result)
                
//             }
//         ).catch(err=>{
//             console.log(err, "fsdfsdfsdfsd")
//         })
//     }

//     static showAll(){
//         const db =getdb();
//         return db.collection('companies')
//         .find()
//         .toArray()
//         .then(companies=>{
//             console.log(companies,'asdasd')
//             return companies
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }

//     static deletebyid(id){
//         const db=getdb()
//         return db.collection('companies')
//         .deleteOne({_id:new mongodb.ObjectId(id)})
//         .then(company=>{
//             console.log(company)
            
//         })
//         .catch(err=>{
//             console.log(err)
//         })
//     }

// }

// module.exports=Companies

// // const Sequelize= require('sequelize')

// // const sequelize= require('../util/database')

// // const Companies= sequelize.define('company',{
// //     id:{
// //         type:Sequelize.INTEGER,
// //         allowNull: false,
// //         primaryKey: true
// //     },
// //     name: {
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     },
// //     url: {
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     },
// //     location: {
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     },
// //     description: {
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     },
// //     _v:{
// //         type:Sequelize.STRING,
// //         allowNull:false
// //     }
// // });



// // module.exports= Companies;
















// // const jsonData =require('../views/companies.json')
// // var fs = require('fs')
// // const path= require('path')
// // // const { delete } = require('../routes/home')
// // var sid='id'
// // var sname='name'

// // module.exports = class Companies{
    
// //     constructor(id,name){
// //         this.id=id,
// //         this.name=name
// //     }

// //     save(){
// //         const p =path.join(__dirname,'../','views','companies.json')
// //     //    jsonData.companies.push({
// //     //        id: this.id,
// //     //        name: this.name
// //     //    })
       
// //         // console.log(jsonData.companies)
// //         fs.readFile(p,(err,fileContent)=>{
// //             let compan=[]
// //             console.log(unescape(fileContent))
// //             if(!err){
// //                 compan=JSON.parse(fileContent)
// //             }
// //             compan.companies.push({
// //                 id: this.id,
// //                 name: this.name
// //             })
// //             fs.writeFile(p,JSON.stringify(compan),(err)=>{
// //                 console.log(err)
// //             })
// //         })
// //     }
    
// //     Edit(){
// //         const p =path.join(__dirname,'../','views','companies.json')
 
// //         console.log("ID",this.id)
// //         fs.readFile(p,(err,fileContent)=>{
// //             let compan=[]
// //             var count = 0
// //             console.log(unescape(fileContent))
// //             if(!err){
// //                 compan=JSON.parse(fileContent)
// //             }
// //             console.log(compan.companies.length,'len')
// //             for (var i = 0; i < compan.companies.length; i++) {
// //                 console.log(compan.companies[i].id,'for')
// //                 console.log('inside',this.id)
// //                 count+=1
// //                 if(compan.companies[i].id=== this.id){
// //                     break
// //                 }

                
// //               }
       
// //             console.log(count,'count')
           
// //             compan.companies[count-1].name= this.name
// //             console.log(compan.companies[count-1].name)
// //             console.log(compan)
// //             fs.writeFile(p,JSON.stringify(compan),(err)=>{
// //                 console.log(err)
// //             })
// //         })
// //     }
// //     Delete(){
// //         const p =path.join(__dirname,'../','views','companies.json')
 
// //         console.log("ID",this.id)
// //         fs.readFile(p,(err,fileContent)=>{
// //             let compan=[]
// //             var count = 0
// //              console.log('Deleeteeeeeeeeeeee')
// //             if(!err){
// //                 compan=JSON.parse(fileContent)
// //             }
// //             console.log(compan.companies.length,'len')
// //             for (var i = 0; i < compan.companies.length; i++) {
// //                 console.log(compan.companies[i].id,'for')
// //                 console.log('inside',this.id)
// //                 count+=1
// //                 if(compan.companies[i].id=== this.id){
// //                     break
// //                 }

                
// //               }
       
// //             console.log(count,'count')
// //             console.log(compan.companies[count-1])
// //             delete compan.companies[count-1]
// //             // compan.companies[count-1].name= this.name
// //             // console.log(compan.companies[count-1].name)
// //             // console.log(compan)
// //             fs.writeFile(p,JSON.stringify(compan),(err)=>{
// //                 console.log(err)
// //             })
// //         })
            
// //     }

// //     static fetchAll(){
// //         console.log(jsonData)
// //         return jsonData
// //     }
// // }
