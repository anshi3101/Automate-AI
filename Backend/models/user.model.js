import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    firebaseUid:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    profilePic:{
        type:String,
        default:""
    }

},{ timestamps:true})
  //this tells konsi field kab create hui and it has two time stamps ek created at and one updated at

  const User = mongoose.model("User",userSchema)
  export default User 