import React from "react";
import { buttonClass } from "../styles";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate("/quiz");
  };
  const handleMake = () => {
    navigate("/quiz-maker");
  };
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Quiz App!</p>
      <button className={buttonClass} onClick={handleStart}>
        Start
      </button>
      <button className={buttonClass} onClick={handleMake}>
        Create Quiz
      </button>
    </div>
  );
};

export default Home;
