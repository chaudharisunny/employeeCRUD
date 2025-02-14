import mongoose,{Document} from 'mongoose'

interface IEmployee extends Document{
    name:String,
    salary:Number,
    doj:Date,
    contact:Number,
    roll:String
}

const EmployeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    doj:{
        type:Date,
        required:true
    }
})

export default mongoose.model<IEmployee>("employee", EmployeeSchema)