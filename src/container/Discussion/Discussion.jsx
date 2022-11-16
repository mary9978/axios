import React, { useEffect, useState } from "react";
import "./discuttion.style.css";
import {getAllComment} from '../../services/getAllComment';
import Comment from "../../component/Comment/Comment";
import FullComment from "../../component/FullComment/FullComment";
import NewComment from "../../component/NewComment/NewComment";
function Discussion() {
  const [comments, setComments] = useState([]);
  const [selectedId, setselectedId] = useState(null);
  const OnClick = (id) => {
    setselectedId(id);
  };
  const getComment = async () => {
    try {
      const { data } = await getAllComment();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComment();
  }, []);
  return (
    <main>
      <section className={"section-comment"}>
        <div className="container">
          <div className="row">
            {comments ? (
              comments.map((c) => (
                <div
                  className={"col-3 d-flex justify-content-center"}
                  key={c.id}
                >
                  <Comment
                    id={c.id}
                    name={c.name}
                    email={c.email}
                    OnClick={OnClick}
                    setComments={setComments}
                  />
                </div>
              ))
            ) : (
              <h1>no comment !!</h1>
            )}
          </div>
        </div>
      </section>
      <section>
        <FullComment selectedId={selectedId} />
      </section>
      <section className={"new-comment-section d-table mx-auto"}>
        <NewComment setComments={setComments}/>
      </section>
    </main>
  );
}

export default Discussion;
