import React from "react";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#4F3F84] p-4">
      <h1 className="font-dyna-puff text-4xl text-center text-[#FFA22A] mb-8">Welcome to Quiz App!</h1>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <button className="w-32 p-2 bg-[#FF662A] text-white rounded hover:bg-[#82AC26]" onClick={handleStart}>
          Start
        </button>
        <button className="w-32 p-2 bg-[#FF662A] text-white rounded hover:bg-[#82AC26]" onClick={handleMake}>
          Create Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;