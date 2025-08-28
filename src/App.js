import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="App">
      <button className="Header" onClick={() => setFilteredData(data)}>
        Data From API
      </button>
      <div className="Buttons">
        <button
          className={selectedUser === 1 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 1));
            setSelectedUser(1);
          }}
        >
          User 1
        </button>
        <button
          className={selectedUser === 2 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 2));
            setSelectedUser(2);
          }}
        >
          User 2
        </button>
        <button
          className={selectedUser === 3 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 3));
            setSelectedUser(3);
          }}
        >
          User 3
        </button>
        <button
          className={selectedUser === 4 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 4));
            setSelectedUser(4);
          }}
        >
          User 4
        </button>
        <button
          className={selectedUser === 5 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 5));
            setSelectedUser(5);
          }}
        >
          User 5
        </button>
        <button
          className={selectedUser === 6 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 6));
            setSelectedUser(6);
          }}
        >
          User 6
        </button>
        <button
          className={selectedUser === 7 ? "selected" : ""}
          onClick={() => {
            setFilteredData(data.filter((item) => item.userId === 7));
            setSelectedUser(7);
          }}
        >
          User 7
        </button>
      </div>
      <div className="Content">
        {filteredData
          ? filteredData.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          : data
          ? data.map((item) => (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))
          : "Loading..."}
      </div>
    </div>
  );
}

export default App;
