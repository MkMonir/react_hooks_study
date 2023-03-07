// import React, { useEffect, useState } from "react";

// const UseEffectApiReq = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     let isCenclled = false;
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((data) => {
//         if (!isCenclled) {
//           alert("Posts are available");
//           setPosts(data);
//         }
//       });

//     return () => {
//       isCenclled = true;
//     };
//   }, []);

//   return (
//     <div>
//       {posts.map((post) => (
//         <h2 key={post.id}>{post.title}</h2>
//       ))}
//     </div>
//   );
// };

// export default UseEffectApiReq;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UseEffectApiReq = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2];

  //FETCH AND CLEAN-UP
  // useEffect(() => {
  //   let isCancelled = false;
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (!isCancelled) {
  //         setUser(data);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   return () => {
  //     isCancelled = true;
  //   };
  // }, [id]);

  //FETCH AND ABORT
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
  //     .then((res) => res.json())
  //     .then((data) => setUser(data))
  //     .catch((err) => {
  //       if (err.name === "AbortError") {
  //         console.log("Cancelled");
  //       } else {
  //         console.log(err);
  //       }
  //     });

  //   return () => {
  //     controller.abort(signal);
  //   };
  // }, [id]);

  //FETCH AND ABORT(AXIOS)
  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => setUser(res.data))
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("Cancelled");
        } else {
          console.log(err);
        }
      });

    return () => {
      cancelToken.cancel();
    };
  }, [id]);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
          gap: "5px",
        }}
      >
        <Link to="/users/1">Fetch User 1</Link>
        <Link to="/users/2">Fetch User 2</Link>
        <Link to="/users/3">Fetch User 3</Link>
      </div>
    </div>
  );
};

export default UseEffectApiReq;
