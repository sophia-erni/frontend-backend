import React, { useEffect, useState } from "react";
import { EditIcon, HomeIcon, TrashIcon } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchQuestions,
  addNewQuestion,
  updateExistingQuestion,
  deleteExistingQuestion,
} from "../redux/questionSlice";
import { useNavigate } from "react-router-dom";
// import Home from "./Home";

const QuestionsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const { register, handleSubmit, reset, setValue, errors } = useForm();
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  const handleHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log("This is onSubmit:", editId);
    if (editId !== null) {
      dispatch(
        updateExistingQuestion({
          id: editId,
          newQuestion: { question: data.question, answer: data.answer },
        })
      ).then(() => {
        dispatch(fetchQuestions());
      });
      setEditId(null);
    } else {
      dispatch(
        addNewQuestion({ question: data.question, answer: data.answer })
      );
    }
    reset();
  };

  const handleEdit = (id) => {
    const question = questions[id];

    if (question) {
      setValue("question", question.question);
      setValue("answer", question.answer);
      setEditId(id);
    } else {
      console.error("Question not found:", id);
    }
  };

  const handleDelete = (id) => {
    const question = questions[id];
    console.log("This is question from handleDelete:", question);
    console.log("This is handleDelete:", question.questionId);
    dispatch(deleteExistingQuestion(question.questionId)).then(() => {
      dispatch(fetchQuestions());
    });
  };

  return (
    <div className="container mx-auto bg-[#4F3F84] min-h-screen">
     <div className="flex flex-row-reverse justify-between items-start pb-2">
      <button onClick={handleHome} className="bg-[#FF662A] p-2 rounded">
          <HomeIcon className="w-6 h-6 text-white" />
        </button>
      <h1 className="font-funnel-display text-4xl font-bold text-center text-[#FFA22A]">Create Quiz</h1>
     </div>
    
      <form className="max-w-sm mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="font-funnel-display w-full p-2 border border-[#FF662A] rounded text-[#FF662A]"
          type="text"
          name="question"
          placeholder="Enter question"
          {...register("question", { required: true })}
        />
        <input
          className="font-funnel-display w-full p-2 border border-[#FF662A] rounded text-[#FF662A]"
          type="text"
          name="answer"
          placeholder="Enter answer"
          {...register("answer", { required: true })}
        />
        <button className="w-full p-2 bg-[#FF662A] text-white rounded hover:bg-[#82AC26]" type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      <ul className="mt-4 space-y-4">
        {questions.map((q, index) => (
          <li key={index} className="font-funnel-display p-4 border border-[#FF662A] rounded flex justify-between items-center bg-[#FFA22A]">
            <div>
              <p className="font-semibold text-[#4F3F84] text-lg ">{q.question}</p>
              <p className="text-[#4F3F84]">{q.answer}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(index)}>
                <EditIcon className="w-4 h-4 text-[#4F3F84]" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <TrashIcon className="w-4 h-4 text-[#4F3F84]" />
              </button>
            </div>
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default QuestionsPage;