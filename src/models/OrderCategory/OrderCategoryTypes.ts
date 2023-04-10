import { Document, Model } from 'mongoose';

export interface IOrderCategory {
user:string
title:string
order_id:number

service_name:Array<string>
min_amount: number
max_amount:number
price:number
description:string
  
}

export interface IOrderCategoryDocument extends IOrderCategory, Document {};

export interface IOrderCategoryModel extends Model<IOrderCategoryDocument> {};