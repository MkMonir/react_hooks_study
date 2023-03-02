import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchComments();
  }, []);

  return (
    <div>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <span>{comment.id}. </span>
          <span>{comment.email}.</span>
        </div>
      ))}
    </div>
  );
};

export default UseEffect;
