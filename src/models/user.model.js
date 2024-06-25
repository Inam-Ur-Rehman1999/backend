import { MongoCryptCreateDataKeyError } from "mongodb";
import mongoose,{Schema} from "mongoose";
import { JsonWebTokenError } from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema=new Schema({
    watchhistory:[{
        type:Schema.Types.ObjectId,
        redf:"Video"

}],

    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
    },

    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        trim:true,
    },

    fullname:{
        type:String,
        required:true,
        trim:true,
        index:true
    },

    avatar:{
        required:true,
        type:String //cloudinary url
    },

    coverimage:{
        type:String, //cloudinary url
        trim:true,
        index:true
    },

    password:{
        type:String,
        required:[true,'Password is required'],
    },

    refreshtoken:{
        type:String,

    },
},{timestamps:true})
 

export const User=mongoose.model("User",userSchema)