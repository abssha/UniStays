import express, { json } from 'express'
import dotenv from 'dotenv'
import connectToDB from './config/db.js'
import useRouter from './routes/user.routes.js'

const app=express()

dotenv.config()
connectToDB()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Server Running")
})

app.use('/api',useRouter)

const port=process.env.PORT || 3001

app.listen(port,()=>{
    console.log(`Server running at port http://localhost:${port}`)
})