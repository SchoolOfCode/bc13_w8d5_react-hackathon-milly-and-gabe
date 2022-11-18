import { useState } from "react";
import "./search.css";

function Search({ handleSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <section id="search">
      <label>
        Search: <input value={searchTerm} onChange={handleChange} />
      </label>
      <button
        onClick={() => {
          handleSearch(searchTerm);
        }}
      >
        Search
      </button>
    </section>
  );
}

export default Search;
