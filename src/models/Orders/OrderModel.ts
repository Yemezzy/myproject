import mongoose from "mongoose";
import { IOrderDocument } from "./OrderTypes";

const Schema =  mongoose.Schema
const OrderSchma = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    order_category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order_Category",
        required: true
    },
    link:{
        type:String,
        required: true
    },
    quantity:{
        type:Number,
        required: true,
        default:1
    },
    service_name:{
        
        type:String,
        required: true
    },
    min_amount:{
        type:Number,
        required: true,  
    },
max_amount:{
    type:Number,
    required: true,
},
price:{
    type:Number,
    required: true,
},
description:{
    type:String
},
confirmed:{
    type:Boolean,
    default:false
}
}, {
    timestamps:true
})

const OrderModel = mongoose.model<IOrderDocument>('Orders', OrderSchma)
export default OrderModel