const mongoose=require("mongoose")

const patientschema=mongoose.Schema(
    {
        name:String,
        phone:String,
        adress:String,
        symptom:String,
        status:String
    }
)
module.exports=mongoose.model("covid",patientschema)
