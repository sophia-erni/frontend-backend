import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../services/questionApi";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const response = await getQuestions();
    return response.data;
  }
);

export const addNewQuestion = createAsyncThunk(
  "questions/addNewQuestion",
  async (question) => {
    const response = await createQuestion(question);
    return response.data;
  }
);

export const updateExistingQuestion = createAsyncThunk(
  "questions/updateExistingQuestion",
  async ({ id, newQuestion }) => {
    const response = await updateQuestion(id, newQuestion);
    return { id, newQuestion: response.data };
  }
);

export const deleteExistingQuestion = createAsyncThunk(
  "questions/deleteQuestion",
  async (id) => {
    console.log("This is deleteExistingQuestion id from queastionSlice:", id);

    const response = await deleteQuestion(id);
    console.log("This is deleteExistingQuestion response from queastionSlice:", response);
    return response;
  }
);

const initialState = {
  questions: [],
  loading: false,
  error: null,
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    changeQuestion: (state, action) => {
      const { id, newQuestion } = action.payload;
      const index = state.questions.findIndex(
        (question) => question.id === id
      );
      if (index !== -1) {
        state.questions[index] = newQuestion;
      }
    },
    removeQuestion: (state, action) => {
      state.questions = state.questions.filter(
        (question) => question.id !== action.payload
      );
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addNewQuestion.fulfilled, (state, action) => {
        state.questions.push(action.payload);
      })
      .addCase(updateExistingQuestion.fulfilled, (state, action) => {
        const { id, newQuestion } = action.payload;
        console.log("This is updateExistingQuestion:", id, newQuestion);
        const index = state.questions.findIndex(
          (question) => question.id === id
        );
        if (index !== -1) {
          state.questions[index] = newQuestion;
        }
      })
      .addCase(deleteExistingQuestion.fulfilled, (state, action) => {
        console.log("This is deleteExistingQuestion:", action.payload);
        state.questions = state.questions.filter(
          (question) => question.id !== action.payload
        );
        console.log("This is from deleteExistingQuestion:", state.questions);
      });
  },
});

export const { addQuestion, changeQuestion, removeQuestion } = questionSlice.actions;
export default questionSlice.reducer;