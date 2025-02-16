import axios from "axios";

const API_URL = "http://localhost:5127/api";

export const getQuestions = async () => {
  const response = await axios.get(`${API_URL}/questions`);
  return response.data;
};

export const getQuestionsById = async (id) => {
  const response = await axios.get(`${API_URL}/questions/${id}`);
  return response.data;
};

export const createQuestion = async (question) => {
  const response = await axios.post(`${API_URL}/questions`, question);
  return response.data;
};

export const updateQuestion = async (id, question) => {
  const response = await axios.put(`${API_URL}/questions/${id}`, question);
  return response.data;
};

export const deleteQuestion = async (id) => {
  return await axios.delete(`${API_URL}/questions/${id}`);
};

export const getAnswers = async () => {
  const response = await axios.get(`${API_URL}/answers`);
  return response.data;
};

export const getAnswersById = async (id) => {
  const response = await axios.get(`${API_URL}/answers/${id}`);
  return response.data;
};

export const createAnswer = async (answer) => {
  const response = await axios.post(`${API_URL}/answers`, answer);
  return response.data;
};

export const updateAnswer = async (id, answer) => {
  const response = await axios.put(`${API_URL}/answers/${id}`, answer);
  return response.data;
};

export const deleteAnswer = async (id) => {
  return await axios.delete(`${API_URL}/answers/${id}`);
};
