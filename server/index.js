import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const app = express();
app.use(express.json());

app.use(cors());

// connect to mongoDB

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn){
        console.log("Connected to MongoDB");
    }
}
connectDB();

app.get("/", (req, res)=>{
    res.json({
        message: "Hello from server"
    })
})

app.post("/signup", postSignup)

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})