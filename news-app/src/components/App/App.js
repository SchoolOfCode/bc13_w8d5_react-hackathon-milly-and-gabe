import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "../Card/index.js";
import Search from "../Search/index.js";
import Header from "../Header/index.js";

function App() {
  const [news, setNews] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  function handleClick(userInput) {
    setSearchTerm(userInput);
  }

  useEffect(() => {
    async function getNews(searchTerm) {
      const response = await fetch(
        //`https://newsapi.org/v2/top-headlines?q=${searchTerm}&country=gb&apiKey=25bbdfd6a26d4b0386c421dd40623a55`
        `https://newsapi.org/v2/everything?q=${
          searchTerm || "world"
        }&from=2022-11-18&language=en&apiKey=25bbdfd6a26d4b0386c421dd40623a55`
      );
      const data = await response.json();
      setNews(data.articles);
    }
    getNews(searchTerm);
  }, [searchTerm]);

  return (
    <div className="App">
      <Header />
      <Search handleClick={handleClick} />
      <Card news={news} />
    </div>
  );
}

export default App;
