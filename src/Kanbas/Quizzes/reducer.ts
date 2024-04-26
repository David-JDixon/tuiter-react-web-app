import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [] as {
    _id: string;
    name: string;
    description: string;
    quizType: string;
    assignmentGroup: string;
    shuffleAnswers: Boolean;
    timeLimit: Boolean;
    minutes: Number;
    allowMultipleAttemps: Boolean;
    due: Date;
    published: Boolean;
  }[],
  quiz: {
    name: "TestQuiz",
    description: "No Description",
    quizType: "Graded Quiz",
    assignmentGroup: "Quiz",
    shuffleAnswers: true,
    timeLimit: false,
    minutes: 0,
    allowMultipleAttemps: false,
    due: "2024-04-21",
    published: false,
  },
};
const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    saveQuiz: (state, action) => {
      state.quiz = action.payload;
    },
    saveAndPublishQuiz: (state, action) => {
      state.quiz.published = true;
    },
    saveAndUnpublishQuiz: (state, action) => {
      state.quiz.published = false;
    },
    copyQuiz: (state, action) => {
      const quizToCopy = state.quizzes.find(
        (quiz) => quiz._id === action.payload
      );
      if (quizToCopy) {
        const copiedQuiz = {
          ...quizToCopy,
          _id: new Date().getTime().toString(),
        };
        state.quizzes = [...state.quizzes, copiedQuiz];
      }
    },
    sortQuizzes: (state) => {
      state.quizzes.sort((a, b) => a.name.localeCompare(b.name));
    },
    addQuiz: (state, action) => {
      state.quizzes = [
        { ...action.payload, _id: new Date().getTime().toString() },
        ...state.quizzes,
      ];
    },
  },
});
export const {
  setQuiz,
  saveQuiz,
  saveAndPublishQuiz,
  saveAndUnpublishQuiz,
  copyQuiz,
  sortQuizzes,
  addQuiz,
} = quizSlice.actions;
export default quizSlice.reducer;
