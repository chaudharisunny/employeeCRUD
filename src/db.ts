const mongoose=require('mongoose')

 mongoose.connect("mongodb://localhost/crudop")
 .then(()=>{
    console.log('database connect');
    
 }).catch((error)=>{
    console.log(error);
    
 })