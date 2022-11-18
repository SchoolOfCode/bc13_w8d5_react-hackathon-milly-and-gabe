import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Card from "../Card/index.js";
import Search from "../Search/index.js";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function getNews() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=gb&apiKey=25bbdfd6a26d4b0386c421dd40623a55`
      );
      const data = await response.json();
      console.log(data);
      console.log(data.articles);
      setNews(data.articles);
      console.log(news);
    }
    getNews();
  }, []);

  return (
    <div className="App">
      <Search />
      <Card news={news} />
    </div>
  );
}

export default App;
