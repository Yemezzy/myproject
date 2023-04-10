import mongoose from "mongoose";
import { IOrderCategoryDocument} from "./OrderCategoryTypes";

const Schema =  mongoose.Schema


const OrderCategorySchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
  order_id:{
type:Number,
required:true,
unique:true
  },
  title:{
    type:String,
    required: true
  },
    order_services:[String],
    min_amount:{
        type:Number,
        required: true,  
    },
max_amount:{
    type:Number,
    required: true,
},
price_per_1000:{
    type:Number,
    required: true,
},
description:{
    type:String
},

},{timestamps:true})

const OrderCategoryModel = mongoose.model<IOrderCategoryDocument>('Order_Category', OrderCategorySchema)
export default OrderCategoryModel