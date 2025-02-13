import mongoose from "mongoose"

const employeSchema=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        roll:{
            type:String,
            required:true
        },
        salary:{
            type:String,
            required:true
        },
        doj:{
            type:Date,
            required:true
        },
        contact:{
            type:String,
            required:true
        }
})

module.exports=mongoose.model("employee",employeSchema)