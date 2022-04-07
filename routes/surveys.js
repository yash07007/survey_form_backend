const router = require("express").Router();
let Survey = require("../models/survey.model");

// Create
router.route("/add").post((req, res) => {
    const user_name = req.body.user_name;
    const survey_time = req.body.survey_time;
    const responses = req.body.responses;

    const newSurvey = new Survey({ user_name, survey_time, responses });

    newSurvey
        .save()
        .then(() => res.json("Survey added!"))
        .catch((err) => res.status(400).json("Error " + err));
});

// Read
router.route("/").get((req, res) => {
    Survey.find()
        .then((surveys) => res.json(surveys))
        .catch((err) => res.status(400).json("Error " + err));
});

// Update
router.route("/update/:id").post((req, res) => {
    Survey.findById(req.params.id)
        .then((survey) => {
            survey.user_name = req.body.user_name;
            survey.survey_time = req.body.survey_time;
            survey.responses = req.body.responses;

            survey
                .save()
                .then(() => res.json("Survey Updated!"))
                .catch((err) => res.status(400).json("Error " + err));
        })
        .catch((err) => res.status(400).json("Error " + err));
});

// Delete
router.route("/:id").delete((req, res) => {
    Survey.findByIdAndDelete(req.params.id)
        .then(() => res.json("Survey Deleted!"))
        .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
