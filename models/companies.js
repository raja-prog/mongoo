const jsonData =require('../views/companies.json')
var fs = require('fs')
const path= require('path')
// const { delete } = require('../routes/home')
var sid='id'
var sname='name'

module.exports = class Companies{
    
    constructor(id,name){
        this.id=id,
        this.name=name
    }

    save(){
        const p =path.join(__dirname,'../','views','companies.json')
    //    jsonData.companies.push({
    //        id: this.id,
    //        name: this.name
    //    })
       
        // console.log(jsonData.companies)
        fs.readFile(p,(err,fileContent)=>{
            let compan=[]
            console.log(unescape(fileContent))
            if(!err){
                compan=JSON.parse(fileContent)
            }
            compan.companies.push({
                id: this.id,
                name: this.name
            })
            fs.writeFile(p,JSON.stringify(compan),(err)=>{
                console.log(err)
            })
        })
    }
    
    Edit(){
        const p =path.join(__dirname,'../','views','companies.json')
 
        console.log("ID",this.id)
        fs.readFile(p,(err,fileContent)=>{
            let compan=[]
            var count = 0
            console.log(unescape(fileContent))
            if(!err){
                compan=JSON.parse(fileContent)
            }
            console.log(compan.companies.length,'len')
            for (var i = 0; i < compan.companies.length; i++) {
                console.log(compan.companies[i].id,'for')
                console.log('inside',this.id)
                count+=1
                if(compan.companies[i].id=== this.id){
                    break
                }

                
              }
       
            console.log(count,'count')
           
            compan.companies[count-1].name= this.name
            console.log(compan.companies[count-1].name)
            console.log(compan)
            fs.writeFile(p,JSON.stringify(compan),(err)=>{
                console.log(err)
            })
        })
    }
    Delete(){
        const p =path.join(__dirname,'../','views','companies.json')
 
        console.log("ID",this.id)
        fs.readFile(p,(err,fileContent)=>{
            let compan=[]
            var count = 0
             console.log('Deleeteeeeeeeeeeee')
            if(!err){
                compan=JSON.parse(fileContent)
            }
            console.log(compan.companies.length,'len')
            for (var i = 0; i < compan.companies.length; i++) {
                console.log(compan.companies[i].id,'for')
                console.log('inside',this.id)
                count+=1
                if(compan.companies[i].id=== this.id){
                    break
                }

                
              }
       
            console.log(count,'count')
            console.log(compan.companies[count-1])
            delete compan.companies[count-1]
            // compan.companies[count-1].name= this.name
            // console.log(compan.companies[count-1].name)
            // console.log(compan)
            fs.writeFile(p,JSON.stringify(compan),(err)=>{
                console.log(err)
            })
        })
            
    }

    static fetchAll(){
        console.log(jsonData)
        return jsonData
    }
}
