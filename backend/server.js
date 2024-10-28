import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'

//config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//mid
app.use(express.json())
app.use(cors())

// api
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API đang chạy")
})

app.listen(port, ()=> console.log('Server đang chạy ở pọt : ' + port))
