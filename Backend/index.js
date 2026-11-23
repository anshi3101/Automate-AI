import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js"

const app = express()

const port = process.env.PORT || 5000


app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use((cookieParser()))

app.use("/api/auth",authRouter)

app.listen(port, () => {
    connectDB()
    console.log("server started at ",port)
})
