import express from 'express'
import user from '../models/userModel.js'
import {body,validationResult} from 'express-validator'

const router=express.Router()
router.post('/userInfo',
    body('email').trim(),
    body('name').trim(),
    async(req,res)=>{
    const {id,email,name}=req.body

    const err=validationResult(req)

    if(!err.isEmpty()){
        res.status(400).json({
            message:'Invalid data',
            errors:err.array()
        })
    }
    const existingUser=await user.findOne({id})

    if(existingUser){
        return res.json({message:"User Exists",user:existingUser})
    }

    const newUser=await user.create({
        id,
        email,
        name
    })

    res.json(newUser)
})

export default router