const mongoose= require('mongoose')

const Schema=mongoose.Schema;
const userSchema= new Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type:String,
        required:true,
    },
    Age:Number,
    Job:String
    
    
})
module.exports=mongoose.model('user',userSchema)