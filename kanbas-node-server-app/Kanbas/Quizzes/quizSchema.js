import mongoose from "mongoose";
const quizSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    quizType: {
        type: String,
        required: true
    },
    shuffleAnswers: {
        type: Boolean,
        required: true
    },
    timeLimit: {
        type: Boolean,
        required: true
    },
    minutes: {
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    allowMultipleAttemps: {
        type: Boolean,
        required: true
    },
    avaliability: {
        type: Date,
        required: true
    },
    due: {
        type: Date,
        required: true
    },
    published: {
        type: Boolean,
        required: true
    },
    questions: {
        type: [
            {
                _id: {
                    type: String,
                    required: true
                },
                question: {
                    type: String,
                    required: true
                },
                options: {
                    type: [String],
                    required: true
                },
                correctAnswer: {
                    type: String,
                    required: true
                }
            }
        ],
        required: true
    }
});
export default quizSchema;
    