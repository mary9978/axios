import React, { useEffect, useState } from "react";
import http from '../../services/httpService';
function FullComment({ selectedId }) {
  const [selectedData, setselectedData] = useState();
  useEffect(() => {
    if (selectedId) {
      http
        .get(`/comments/${selectedId}`)
        .then((res) => {
          setselectedData(res.data);
        })
        .catch();
    }
  }, [selectedId]);
  let commentDetail = <p>Please select comment !</p>;
  if (selectedId) commentDetail = <p>Loading</p>;
  if (selectedData) {
    commentDetail = (
      <div>
        <h1>{selectedData.id}</h1>
        <p>{selectedData.name}</p>
        <p>{selectedData.email}</p>
        <p>{selectedData.body}</p>
      </div>
    );
  }
  return commentDetail;
}
export default FullComment;
