import axios from "axios";

const API_URL = "http://localhost:5127/api";

export const getQuestions = async () => {
  try {
  const response = await axios.get(`${API_URL}/questions`);
  // console.log("This is Get response from api:", response);
  return response;
  }
  catch (error){
    console.error("This is Get error from api:", error);
  }
};

export const getQuestionsById = async (id) => {
  const response = await axios.get(`${API_URL}/questions/${id}`);
  return response;
};

export const createQuestion = async (question) => {
  
  try {
  const response = await axios.post(`${API_URL}/questions`, question);
  return response;
  }catch(error)
  {
    console.error("This is Create error from api:", error);
  }
};

export const updateQuestion = async (id, question) => {
  console.log("This is updateQuestion from API:",id);

  try {
    const response = await axios.put(`${API_URL}/questions/${id}`, question);
    return response;
  } catch (error) { 
    console.log(id);
    console.error("This is Update error from api:", error);
  }
};

export const deleteQuestion = async (id) => {
  console.log("This is deleteQuestion from API:",id);
  try {
    const response = await axios.delete(`${API_URL}/questions/${id}`);
    console.log("This is Delete response from API:", response);
    return id;
  } catch (error) {
    console.error("This is Delete error from api:", error);
  }
};
