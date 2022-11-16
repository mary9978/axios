import React from "react";
import http from '../../services/httpService';
import {deleteComment} from '../../services/deleteComment';
import {getAllComment} from '../../services/getAllComment';
import "./comment.style.css";
function Comment({ setComments, id, name, email, OnClick }) {
  const ClickHandler = (id) => {
    OnClick(id);
  };
  const DeleteHandler = async (id) => {
    try {
      await deleteComment(id);
      const { data } = await getAllComment();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={"comment-div"}>
      <p>name : {name}</p>
      <p>email : {email}</p>
      <button onClick={() => ClickHandler(id)}>show more detail</button>
      <button
        onClick={() => DeleteHandler(id)}
        className={"btn btn-sm btn-primary"}
      >
        Delete comment
      </button>
    </div>
  );
}

export default Comment;
