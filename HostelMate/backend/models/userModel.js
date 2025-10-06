import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
    id:{
        type:String,
        trim:true,
        lowercase:true,
        required:true,
        unique:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    name:{
        type:String,
        trim:true,
        lowercase:true,
        required:true
    }
})

const model=mongoose.model('user',userSchema)

export default model;