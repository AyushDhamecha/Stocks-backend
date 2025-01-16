const {model} =require("mongoose")

const {HoldingSchema} = require("../schema/HoldingSchema")

const HoldingModel=new model("holding",HoldingSchema)

module.exports={HoldingModel};  //export the model to be used in other files