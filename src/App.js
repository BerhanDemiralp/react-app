import { useEffect, useMemo, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const visibleData = useMemo(() => {
    if (selectedUser == null) return data; // If no user is selected, show all data
    return data.filter((item) => item.userId === selectedUser);
  }, [data, selectedUser]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <button
        className="Header"
        onClick={() => {
          setSelectedUser(null);
        }}
      >
        Data From API
      </button>
      <div className="Buttons">
        <button
          className={selectedUser === 1 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(1);
          }}
        >
          User 1
        </button>
        <button
          className={selectedUser === 2 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(2);
          }}
        >
          User 2
        </button>
        <button
          className={selectedUser === 3 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(3);
          }}
        >
          User 3
        </button>
        <button
          className={selectedUser === 4 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(4);
          }}
        >
          User 4
        </button>
        <button
          className={selectedUser === 5 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(5);
          }}
        >
          User 5
        </button>
        <button
          className={selectedUser === 6 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(6);
          }}
        >
          User 6
        </button>
        <button
          className={selectedUser === 7 ? "selected" : ""}
          onClick={() => {
            setSelectedUser(7);
          }}
        >
          User 7
        </button>
      </div>
      <div className="Content">
        {visibleData
          ? visibleData.map((item) => (
              <div key={item.id} className="Card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="Card-user-id">
                  <strong>User ID:</strong> {item.userId}
                </p>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default App;
