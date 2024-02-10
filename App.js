import express from "express";
import http from "http";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Router from "./Router/Router.js";




const PORT = 5500


const app = express()

app.use(bodyParser.json())
http.createServer(app)
app.use(bodyParser.json({ limit: "50mb" }));






 

app.use('/api/',Router)






mongoose.connect("mongodb://127.0.0.1:27017/krustykrab")
.then(()=>{
    console.log('Data base Done!');
}).catch((er)=>{
    console.log("validation err is ",er);
})
app.listen(PORT,()=>{
   console.log(`PORT IS ${PORT}`)
})