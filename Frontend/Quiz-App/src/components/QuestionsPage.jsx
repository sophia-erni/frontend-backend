import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  fetchQuestions,
  addNewQuestion,
  updateExistingQuestion,
  deleteExistingQuestion,
} from "../redux/questionSlice";

import { buttonClass, divClassWrapper, formClass, inputForFormClass,inputForFormClass_questionPage,labelForFormClass,pQuestionForFormClass_questionPage,titleClass, titleClass_questionPage } from "../styles";
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
    console.log("Thiis onSubmit:", editId);
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
    // console.log("This is handleEdit:", id);
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
    console.log("this is question from Handledelete:", question);
    console.log("This is handleDelete:", question.questionId);
    dispatch(deleteExistingQuestion(question.questionId)).then(() => {
      dispatch(fetchQuestions());
    });
  };

  return (
    <div className={divClassWrapper}>
      <h1 className={titleClass_questionPage}>Create Quiz</h1>
      <form className="max-w-sm mx-auto space-y-5" onSubmit={handleSubmit(onSubmit)}>
        <input
          className={inputForFormClass_questionPage}
          type="text"
          name="question"
          placeholder="Enter question"
          {...register("question", { required: true })}
        />
        {/* {errors.question.message && <p>Question is required</p>} */}
        <input
          className={inputForFormClass_questionPage}
          type="text"
          name="answer"
          placeholder="Enter answer"
          {...register("answer", { required: true })}
        />
        {/* {errors.answer.message && <p>Question is required</p>} */}
        <button className={buttonClass} type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            <p className={pQuestionForFormClass_questionPage}>{q.question}</p>
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
    // </div>
  );
};

export default QuestionsPage;
