// Import Dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const cookieParser = require('cookie-parser')
require("dotenv").config();





// Import Routes
const authRoutes = require("./routes/authroute");
const portfolioRoutes = require("./routes/portfolioroute");


// Intialize express app
const app = express();
const PORT = process.env.PORT;
const baseURL = "http://localhost:"+PORT;

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://www.eunicedhivya.com/",
      "http://mytest-ed.us-east-1.elasticbeanstalk.com/",
      "http://localhost:3000",
      "http://localhost:5000",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.static(path.join(__dirname, 'client/build')));

// Always return the main index.html

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'));
});



// To Know which path & method was called
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// Connect to mongodb and then start server
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB connected");
})
.catch((error) => {
  console.log(error);
})



app.listen(PORT, () => {
    console.log("Server connected @ " + baseURL);
});

// Home
// app.get("/", (request, response) => {
//     response.send({
//       msg: "Portfolio-cms API",
//     });
// });

app.get("/api/", (request, response) => {
    response.send({
      msg: "API Home",
    });
});



app.use("/api/portfolio/", portfolioRoutes);
app.use("/api/", authRoutes);