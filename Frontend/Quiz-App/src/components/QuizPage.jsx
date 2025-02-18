import { useDispatch, useSelector } from "react-redux";
import React, { use, useEffect, useState } from "react";
import { buttonClass, buttonChoiceClass, titleClass, divClassWrapper } from "../styles";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../redux/questionSlice";

const QuizPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  useEffect(() => {
    console.log("This is questions:", questions);
  }, [questions]);

  useEffect(() => {
    if (questions.length > 0) {
      shuffleAnswers();
    }
  }, [questions, currentQuestion]);

  const shuffleAnswers = () => {
    let answers = [];
  
    for (let i = 0; i < questions.length; i++) {
    answers.push(questions[i].answer);
    }
    // console.log("This is answers from shuffleAnswers before shuffle/slice:", answers);

    answers = answers.slice(0, 3);
    answers.push(questions[currentQuestion].answer);
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    // console.log("This is answers from shuffleAnswers after shuffle:", answers);
    
    setShuffledAnswers(answers)
  };

  const handleAnswerOptionClick = (event) => {
    const choiceAnswer = event.target.innerText;
    if (choiceAnswer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    // console.log("This is handleAnswerOptionClick:", event.target.innerText);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={divClassWrapper}>
      {showScore ? (
        <div className="font-dyna-puff text-center">
          <p className="text-2xl">
            You scored {score} out of {questions.length}
          </p>
          <button className={buttonClass} onClick={handleHome}>
            Home
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md">
          <div className="mb-4">
            <h1 className={titleClass}>
              {questions[currentQuestion]?.question}
            </h1>
          </div>
          <ul>
            {shuffledAnswers.map((answer, index) => (
              <li key={index}>
                <button
                  className={buttonChoiceClass}
                  onClick={handleAnswerOptionClick}
                >
                  {answer}
                </button>
              </li>
            ))}
          </ul>
          <button className={buttonClass} onClick={handleHome}>
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
