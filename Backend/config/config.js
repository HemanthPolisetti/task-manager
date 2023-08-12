import mongoose from "mongoose";
const uri="mongodb+srv://hemanthpolisetti:hemanth261@cluster0.aajwmsi.mongodb.net/taskmanager?retryWrites=true&w=majority"

const connectDB=()=>{
    try{
        const conn = mongoose.connect(uri)
        console.log('MONGODB CONNECTED SUCCESSFULLY')
    }
    catch(err){
        throw new Error(`Error connecting to MongoDB: ${err}`)
    }
}

export default connectDB