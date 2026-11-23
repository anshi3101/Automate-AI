import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
const protect  = async (req,res,next) => { //next func se req jo hai vo res server ko bhej dega
    try{
        const token = req.cookies.token
        if(!token){
            return res.status(404).json({message:"Unuthorised access"})
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId)
        if(!user){
            return res.status(404).json({message:"User not found"})
        }
        req.user = user
        next()

    } catch(error){
       return rs.status(500).json({message:`Protect error: ${error.message}`})

    }
}

export default protect