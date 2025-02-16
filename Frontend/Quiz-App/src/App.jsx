import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import QuizMaker from "./components/QuizMaker";
import "./App.css";

function App() {
  return (
    <Routers>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz-maker" element={<QuizMaker />} />
      </Routes>
    </Routers>
  );
}

export default App;
