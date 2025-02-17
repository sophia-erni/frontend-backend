import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import QuizPage from "./components/QuizPage";
import QuestionsPage from "./components/QuestionsPage";
import "./App.css";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/quiz-maker" element={<QuestionsPage />} />
      </Routes>
    </Routers>
  );
}

export default App;
