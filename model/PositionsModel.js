const {model} =require("mongoose")

const {PositionsSchema} = require("../schema/PositionsSchema")

const PositionsModel=new model("position",PositionsSchema)

module.exports={PositionsModel};  //export the model to be used in other files