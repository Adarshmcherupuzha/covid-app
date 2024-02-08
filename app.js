const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const patientrouter=require("./controller/patientrouter")

const app=express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://adarsh:adarsh123@cluster0.bsql3fl.mongodb.net/covidDb?retryWrites=true&w=majority",
{useNewurlParser:true})
app.use("/api/covid",patientrouter)

app.listen(3001,()=>{
    console.log("server running")
})