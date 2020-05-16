const express = require("express");
const router = express.Router();
const book = require("../model/book.js");




router.post("/books", (req, res) => {
    console.log(req.body.title);
    book.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.get("/books", (req, res) => {
    book.find({})
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

router.delete("/book/:id", (req, res) => {
    book.findOneAndDelete({"id": req.param.id})
    .then(data => res.json(data))
    .catch(err => res.json(err))
});

module.export = router;