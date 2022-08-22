import './App.css';
import React, { useState } from 'react';
function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handleChange(event) {
    const newValue= event.target.value;
    setInputText(newValue);
  }
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <h1>To-Do-List</h1>

      <input type="text" id="input-field" value={inputText} onChange={handleChange} />
      <button onClick={addItem} id="btn-add">Add</button>
      <ul>
        {items.map(todoItem => <li>{todoItem}</li>)}
      </ul>

    </div>
  );
}

export default App;
