import bodyParser from "body-parser"
import express from "express"
import mongoose from "mongoose"
import cors from "cors";
import postRoutes from "./routes/posts.js"

const app=express();


app.use(bodyParser.json({limit:"50mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"50mb",extended:true}));
 app.use(cors());
//  app.use(cors({
//      origin:"http://127.0.0.1:5000"
//  }))


app.use("/posts",postRoutes)

const CONNECTION_URL="mongodb+srv://varsha:memories1912@mempro.jf0ao.mongodb.net/MEMORIES?retryWrites=true&w=majority"
const PORT=process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(()=>app.listen(PORT,()=> console.log("server listening on port "+PORT)))
    .catch((error)=> console.log(error))

