const router = require("express").Router();
let Question = require("../models/question.model");

// Create
router.route("/add").post((req, res) => {
    const question_code = req.body.question_code;
    const question_text = req.body.question_text;

    const newQuestion = new Question({ question_code, question_text });

    newQuestion
        .save()
        .then(() => res.json("Question added!"))
        .catch((err) => res.status(400).json("Error " + err));
});

// Read
router.route("/").get((req, res) => {
    Question.find()
        .then((questions) => {
            questions = questions.sort(() => Math.random() - Math.random()).slice(0, req.query.noOfQuestions);
            res.json(questions);
        })
        .catch((err) => res.status(400).json("Error " + err));
});

// Update
router.route("/update/:id").post((req, res) => {
    Question.findById(req.params.id)
        .then((question) => {
            question.question_code = req.body.question_code;
            question.question_text = req.body.question_text;

            question
                .save()
                .then(() => res.json("Question Updated!"))
                .catch((err) => res.status(400).json("Error " + err));
        })
        .catch((err) => res.status(400).json("Error " + err));
});

// Delete
router.route("/:id").delete((req, res) => {
    Question.findByIdAndDelete(req.params.id)
        .then(() => res.json("Question Deleted!"))
        .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
