const express=require("express")
const patientrouter=require("../model/patientmodel")

const router=express.Router()




router.post("/entry",async(req,res)=>{
    
    
    let data=req.body
    let patient=new patientrouter(data)
    let result=await patient.save()    
    res.json({status:"success"})})




   


module.exports=router







