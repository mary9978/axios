import React, { useState } from "react";
import {addNewComment} from '../../services/addNewComment';
import {getAllComment} from '../../services/getAllComment';
function NewComment({setComments}) {
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const [comment, setComment] = useState();
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  const postHandler = (comment) => {
      // http.post("/comments", comment)
      addNewComment(comment)
      .then((res) => getAllComment())
      .then(res => setComments(res.data))
      .catch();
  }
  return (
    <div style={style}>
      <label>name:</label>
      <input
        type={"text"}
        placeholder={"enter your name"}
        name={"name"}
        onChange={changeHandler}
      />
      <label>email:</label>
      <input
        type={"email"}
        placeholder={"enter your email"}
        name={"email"}
        onChange={changeHandler}
      />
      <label>comment:</label>
      <textarea
        placeholder={"enter your comment"}
        name={"body"}
        onChange={changeHandler}
      ></textarea>
      <button onClick={()=> postHandler(comment)}>Add new comment</button>
    </div>
  );
}
export default NewComment
