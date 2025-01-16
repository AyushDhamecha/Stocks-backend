const {Schema} = require("mongoose")

const HoldingSchema=new Schema({
    name:String,
    qty:Number,
    price:Number,
    avg:Number,
    net:String,
    day:String,
})
module.exports={HoldingSchema};  

