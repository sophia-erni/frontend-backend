import React from "react";
import { buttonClass,divClassWrapper } from "../styles";
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
    <div className={divClassWrapper}>
      <h1 className="font-dyna-puff text-4x1 text-center text-yellow-300">Welcome to Quiz App!</h1>
      <button className={`${buttonClass} mt-5 w-32`} onClick={handleStart}>
        Start
      </button>
      <button className={`${buttonClass} mt-5 w-32`}  onClick={handleMake}>
        Create Quiz
      </button>
    </div>
  );
};

export default Home;
