import React, { useEffect, useState } from "react";
import { getQuestions, getAnswers } from "../services/api";

const QuizList = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getQuestions();
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchAnswers = async () => {
      const answers = await getAnswers();
      setAnswers(answers);
    };
    fetchAnswers();
  }, []);

  return (
    <div>
      <h1>Quiz List</h1>
      <p>Quiz List Page</p>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <p>{answers[index].answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
