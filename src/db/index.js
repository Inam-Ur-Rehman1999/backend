import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js";

import dotenv from 'dotenv';

dotenv.config();
const connectDB=async()=>{
    try{
        const connecting = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n Mongodb connected ! DB HOST: ${connecting.connection.host}`)
    }
    catch(error){
        console.log("Mongodb error",error)
    
    }
}

export default connectDB