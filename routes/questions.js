const router = require("express").Router();
let Question = require("../models/question.model");

router.route("/").get((req, res) => {
    Question.find()
        .then((questions) => res.json(questions))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
    const question = req.body.question;
    const options = req.body.options;

    const newQuestion = new Question({ question, options });

    newQuestion
        .save()
        .then(() => res.json("Question added!"))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json("Question Deleted"))
        .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
    Question.findById(req.params.id)
        .then((question) => {
            question.question = req.body.question
            question.options = req.body.options

            question.save()
                .then(() => res.json("Question Updated"))
                .catch((err) => res.status(400).json("Error " + err));
        })
        .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
