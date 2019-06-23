var express = require('express');

var controller = require('../controllers/authorController');

var router = express.Router();

var authorController = new controller();

router.get("/", (req, res) => {
    authorController.index(req, res);
});

router.get("/add", (req, res) => {
    authorController.add(req, res);
});

router.post("/add", (req, res) => {
    authorController.save(req, res);
});

router.post("/author/edit/:id", (req, res) => {
    authorController.save(req, res);
});

router.get("/author/edit/:id", (req, res) => {
    authorController.edit(req, res);
});

router.get("/author/delete/:id", (req, res) => {
    authorController.delete(req, res);
});

module.exports = router;