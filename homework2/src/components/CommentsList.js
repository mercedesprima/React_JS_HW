import React, { useState } from "react";

const CommentsList = () => {
  const [comments, setComments] = useState([
    { id: 1, text: "1-й комментарий" },
    { id: 2, text: "2-й комментарий" },
    { id: 3, text: "3-й комментарий" },
    { id: 4, text: "4-й комментарий" },
    { id: 5, text: "5-й комментарий" },
    { id: 6, text: "6-й комментарий" },
    { id: 7, text: "7-й комментарий" },
  ]);

  const deleteComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };

  return (
    <div>
      <h2>Комментарии</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsList;
