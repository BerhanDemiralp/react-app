import { useEffect, useMemo, useState } from "react";
import "./App.css";

function PostCard({ post }) {
  return (
    <article className="postCard" aria-labelledby={`post-${post.id}-title`}>
      <h3 id={`post-${post.id}-title`}>{post.title}</h3>
      <p>{post.body}</p>
      <p className="postCardUserId">User ID: {post.userId}</p>
    </article>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const visibleData = useMemo(() => {
    if (selectedUser == null) return data;
    return data.filter((item) => item.userId === selectedUser);
  }, [data, selectedUser]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="app">
      <button
        className="header"
        onClick={() => {
          setSelectedUser(null);
        }}
      >
        Data From API
      </button>
      <div className="userButtons">
        {[1, 2, 3, 4, 5, 6, 7].map((userId) => (
          <button
            key={userId}
            className={
              selectedUser === userId ? "userButton selected" : "userButton"
            }
            onClick={() => setSelectedUser(userId)}
          >
            User {userId}
          </button>
        ))}
      </div>
      <div className="content">
        {visibleData
          ? visibleData.map((item) => <PostCard key={item.id} post={item} />)
          : "Loading..."}
      </div>
    </div>
  );
}

export default App;
