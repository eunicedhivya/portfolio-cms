const express = require("express");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();


// Register Endpoint
router.post("/register", async(req, res) =>{
    try{

        // console.log("test", req.body);

        const salt = await bcrypt.genSalt(10);
        const hashPassword =  await bcrypt.hash(req.body.password, salt);
        
        const newUser =  new User({
            fname:req.body.fname,
            lname:req.body.lname,
            email: req.body.email,
            password: hashPassword
        })

        const user = await newUser.save();

        res.status(200).json({user});

    }catch(error){
        res.status(500).json(error);
    }
})

router.post("/login", async (req, res) => {
    try{
        const user = await User.findOne({ email: req.body.email });

        // console.log(user);
        
        if (!user) {
            res.status(400).json({ message: "Invalid Credentials", type: "error" });
        } else {
            // res.status(200).json({ message: "User Exists", type: "success" });
            const isPasswordMatch = await bcrypt.compare(req.body.password, user.password)
           
            if (!isPasswordMatch) { 
                res.status(400).json({ message: "Invalid Credentials", type: "error" }); 
            }else{

                const { password, ...others } = user._doc;
                const token = jwt.sign({ _id: user._id, email:user.email }, process.env.SECRET_KEY);
                res.cookie("token", token, {
                  httpOnly: true,
                  sameSite: "none",
                }).status(200).json({others, token}); 
            }
        }

    }catch(error){
        res.status(500).json(error)
    }
})

router.get("/logout", (req, res) => {
    try {
      res.clearCookie("token").status(200).json({ message: "Logged out" });
    } catch (error) {
      res.status(500).json(error);
    }
 });

 router.post("/loggedIn", (req, res) => {
    try {
      const token = req.body.token;
      if (!token) {
        return response.json(false);
      }
  
      jwt.verify(token, process.env.SECRET_KEY);
  
      res.send(true);
    } catch (err) {
      res.json(false);
    }
});

module.exports = router;