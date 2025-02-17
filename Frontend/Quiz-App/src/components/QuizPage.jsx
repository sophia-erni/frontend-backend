import { buttonClass } from "../styles";
import { useNavigate } from "react-router-dom";
const QuizPage = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Quiz</h1>
      <p>Quiz Page</p>
      <button className={buttonClass} onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default QuizPage;
