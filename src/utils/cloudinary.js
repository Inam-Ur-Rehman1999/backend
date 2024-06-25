import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
import dotenv from 'dotenv';
dotenv.config();

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.cloud_name, 
        api_key: process.env.api_key, 
        api_secret: process.env.api_secret // Click 'View Credentials' below to copy your API secret
    });

    //creating local path 
    const uploadCloudinary=async(localfilepath)=>{
        try{
            if(!localfilepath) return null
            const response = await cloudinary.uploader.upload(localfilepath,{resource_type:'auto'})
            //file has been uploaded succesfully
            console.log("File has been uploaded successfully",response.url)
            return response
        }
        catch(error){
            fs.unlinkSync(localfilepath) //remove the locally saved temporay file as the upload operation got failed
            return null
        }
    }
    
    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('shoes', {
        fetch_format: 'auto',
        quality: 'auto'
    });
    
    console.log(optimizeUrl);
    
    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });
    
    console.log(autoCropUrl);    
})();