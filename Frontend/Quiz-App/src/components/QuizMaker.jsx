import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addQuestion,
  updateQuestion,
  deleteQuestion,
} from "../redux/questionSlice";
import { buttonClass, formClass, inputForFormClass } from "../styles";
import { useNavigate } from "react-router-dom";

const QuizMaker = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions.questions);
  const { register, handleSubmit, reset, setValue, errors } = useForm();
  const [editId, setEditId] = useState(null);

  const handleHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    console.log("Thiis onSubmit:", editId);
    if (editId !== null) {
      dispatch(
        updateQuestion({
          id: editId,
          newQuestion: { question: data.question, answer: data.answer },
        })
      );
      setEditId(null);
    } else {
      dispatch(
        addQuestion({
          question: data.question,
          answer: data.answer,
        })
      );
    }
    reset();
  };

  const handleEdit = (id) => {
    console.log("This is handleEdit:", id);
    // const question = questions.find((question) => question.id === id);
    const question = questions[id];
    setValue("question", question.question);
    setValue("answer", question.answer);
    setEditId(id);
  };

  const handleDelete = (id) => {
    dispatch(deleteQuestion(id));
  };
  return (
    <div>
      <h1>Quiz Maker</h1>
      <p>Quiz Maker Page</p>
      <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={inputForFormClass}
          type="text"
          name="question"
          placeholder="Enter question"
          {...register("question", { required: true })}
        />
        {/* {errors.question && <p>Question is required</p>} */}
        <input
          className={inputForFormClass}
          type="text"
          name="answer"
          placeholder="Enter answer"
          {...register("answer", { required: true })}
        />
        {/* {errors.answer && <p>Question is required</p>} */}
        <button className={buttonClass} type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <p>{q.question}</p>
            <p>{q.answer}</p>
            <button className={buttonClass} onClick={() => handleEdit(index)}>
              Edit
            </button>
            <button className={buttonClass} onClick={() => handleDelete(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <button className={buttonClass} onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default QuizMaker;
