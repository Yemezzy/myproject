import { Document, Model } from 'mongoose';

export interface IUser {
    email: string;
    username: string;
    fullname?: string;
    firstname?: string;
    lastname?: string;
    role: string;
    
    password: string;
    profilePicture: string;
    isVerified: Boolean;
    points: Number
    about: string;
    refreshToken: Array<string>;
    
}

export interface IUserDocument extends IUser, Document {};

export interface IUserModel extends Model<IUserDocument> {};