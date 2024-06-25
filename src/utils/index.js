import dotenv from "dotenv"
import mongoose from "mongoose";
import express from "express";
import connectDb from "../db/index.js"
const app=express()


dotenv.config({
    path:'./env'
})

connectDb().then(()=>{
    app.listen(process.env.PORT || 7000,()=>{
        console.log(`SERVER IS RUNNING AT PORT : ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("Mongodb connection failed",err)
})


