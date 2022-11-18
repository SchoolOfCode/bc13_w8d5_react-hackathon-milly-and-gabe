import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { useEffect, useState } from "react";
import Logo from "../Logo/index";
import Search from "../Search/index";
import Card from "../Card/index";

function App() {
  const [news, setNews] = useState("");

  useEffect((searchTerm) => {
    async function getNews(searchTerm) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${searchTerm}country=gb&apiKey=25bbdfd6a26d4b0386c421dd40623a55`
      );
      const data = await response.json();
      console.log(data);
      setNews(data);
    }
    getNews(searchTerm);
  }, []);

  return (
    <div className="App">
      <Logo />
      <Search />
      <Card props={news} />
    </div>
  );
}

export default App;
