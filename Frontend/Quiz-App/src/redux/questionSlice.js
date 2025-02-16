import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },
    updateQuestion: (state, action) => {
      const { id, newQuestion } = action.payload;
      state.questions[id] = newQuestion;

      // const existingQuestion = state.questions.find(
      //   (question) => question.id === id
      // );
      // if (existingQuestion) {
      //   existingQuestion.question = newQuestion;
      // }
    },
  },
});

export const { addQuestion, deleteQuestion, updateQuestion } =
  questionSlice.actions;
export default questionSlice.reducer;
