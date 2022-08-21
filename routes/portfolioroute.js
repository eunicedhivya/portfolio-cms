const express = require("express");
const Portfolio = require("../models/PortfolioModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Get All portfolio items
router.get("/", async(req, res) => {
    try{
        const allPortfolio = await Portfolio.find({})
        res.status(200).json(allPortfolio);
    }catch(error){
        res.status(500).json(error);
    }
});

// Get a single portfolio item
router.get("/:id", async(req, res) => {
    try{
        const portfolio = await Portfolio.findOne({ _id: req.params.id})
        res.status(200).json(portfolio);
    }catch(error){
        res.status(500).json(error);
    }
})

// // Create a new portfolio item
router.post("/", async(req, res) => {
  try {
    // const s3URL = "https://myportfoliopics.s3.amazonaws.com/portfolio/";
    const convertToFilename = (req.body.title).toLowerCase().replace(/ /g, '-');
    // console.log((req.body.title).replace(/ /g, '-'));
    const newPortfolio =  new Portfolio({
        title: req.body.title,
        description: req.body.description,
        publication: req.body.publication,
        category: req.body.category,
        img: convertToFilename,
        url: convertToFilename,
        demolink: req.body.demolink,
        githublink: req.body.githublink,
    })
    const portfolio = await newPortfolio.save();
    res.status(200).json(portfolio);
  } catch (error) {
    res.status(500).json(error.message);
  }
})

// Put (Edit) a portfolio item
router.put("/:id", async(req, res) => {
    try {
        const updatedPortfolio = await Post.findByIdAndUpdate(
            req.params.id, { $set: {
                title: req.body.title,
                description: req.body.description,
                publication: req.body.publication,
                category: [...req.body.category],
                img: req.body.img,
                demolink: req.body.demolink,
                githublink: req.body.githublink,
            }, }, { new: true }
          );
        res.status(200).json(updatedPost);
    }catch(error){
        res.status(500).json(error);
    }


})

// Delete a portfolio item
router.delete("/:id", (req, res) => {
    try {

    }catch(error){
        res.status(500).json(error);
    }
})

module.exports = router;