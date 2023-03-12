import { useState, useRef } from "react";
import Button from "./components/Button";

const App = () => {
  const [input, setInput] = useState("");
  const [lists, setLists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLists([...lists, input]);
    setInput("");
  };

  return (
    <>
      <h2>TO DO LIST</h2>
      {/* Search */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="listInput">Task</label>
        <input
          type="text"
          id="listInput"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input type="button" onClick={handleSubmit} value="Submit" />
      </form>
      {/* List */}
      <ul className="lists">
        {lists.map((list, index) => {
          return <li key={index}>{list}</li>;
        })}
      </ul>
    </>
  );
};

export default App;
