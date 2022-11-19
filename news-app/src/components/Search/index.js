import { useState } from "react";
import "./search.css";

function Search({ handleClick }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
  }

  return (
    <section id="search">
      <input value={userInput} onChange={handleChange} />
      <button
        onClick={() => {
          handleClick(userInput);
        }}
      >
        Search
      </button>
    </section>
  );
}

export default Search;
