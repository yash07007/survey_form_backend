const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const responseSchema = new Schema({
    question_code: String,
    question_response: String,
});

const surveySchema = new Schema(
    {
        user_name: String,
        survey_time: Number,
        responses: [responseSchema],
    },
    { timestamps: true }
);

const Survey = mongoose.model("Survey", surveySchema);

module.exports = Survey;
