import React from "react";
//import news from "../App/App.js";

function Card({ news }) {
  console.log(news);
  return (
    <div>
      {news.length > 0 &&
        news.map((newsItem) => (
          <>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.urlToImage} alt="Article header" />
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>
            <a href={newsItem.url}>Read more</a>
          </>
        ))}
    </div>
  );
}

export default Card;
