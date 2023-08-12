import mongoose, { trusted } from "mongoose";

const schema = mongoose.Schema;

const taskSchema=new schema({
    taskTitle:{
        type:String,
        required:true
    },
    taskDescription:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default : Date.now()
    }
})

export default mongoose.model('Task',taskSchema)