require("dotenv").config()

const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const workoutRoutes = require('./routes/workouts.js')



const app = express()
app.use(cors({ origin:'http://localhost:5173'}));

// Custom CORS options
// app.use(
//     cors({
//       origin: "http://localhost/4000", // Allow only this origin
//       methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], // Allowed methods
//       allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
//     })
//   );





//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
    
})

//routes
// app.get('/',(req,res)=>{
//     res.end("Hellow");
// })


//routes
app.use('/api/workouts', workoutRoutes);


//connect to db 
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() =>{
    console.log('Connected to MongoDB')
    app.listen(process.env.PORT ,()=>{
        console.log(`Server listening on port ${process.env.PORT}`);
        
    })
} )
.catch((error)=>{
    console.log(error);
    
})

