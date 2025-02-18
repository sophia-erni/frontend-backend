import React, { useEffect, useState } from "react";
import { EditIcon, TrashIcon } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchQuestions,
  addNewQuestion,
  updateExistingQuestion,
  deleteExistingQuestion,
} from "../redux/questionSlice";
import { useNavigate } from "react-router-dom";

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Create Quiz</h1>
      <form className="max-w-sm mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="question"
          placeholder="Enter question"
          {...register("question", { required: true })}
        />
        <input
          className="w-full p-2 border border-gray-300 rounded"
          type="text"
          name="answer"
          placeholder="Enter answer"
          {...register("answer", { required: true })}
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded" type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      <ul className="mt-4 space-y-4">
        {questions.map((q, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded flex justify-between items-center">
            <div>
              <p className="font-semibold">{q.question}</p>
              <p>{q.answer}</p>
            </div>
            <div className="flex space-x-2">
              <button onClick={() => handleEdit(index)}>
                <EditIcon className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
              <button onClick={() => handleDelete(index)}>
                <TrashIcon className="w-6 h-6 text-gray-800 dark:text-white" />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full p-2 mt-4 bg-gray-500 text-white rounded" onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default QuestionsPage;