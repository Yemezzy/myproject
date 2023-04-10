import { Document, Model } from 'mongoose';

export interface IOrder {
user:string,
order_category: string,
link:string,
quantity:number,
order_services:Array<string>,
min_amount: number,
max_amount:number,
price:number,
description:string
confirmed: boolean
    
}

export interface IOrderDocument extends IOrder, Document {};

export interface IOrderModel extends Model<IOrderDocument> {};