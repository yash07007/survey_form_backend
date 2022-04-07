const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
    {
        question_code: { type: String, required: true },
        question_text: { type: String, required: true },
    },
    { timestamps: true }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
