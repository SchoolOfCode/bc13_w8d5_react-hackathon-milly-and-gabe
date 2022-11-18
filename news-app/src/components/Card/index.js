import React from "react";
import "./article.css";

function Card({ news }) {
  console.log(news);
  return (
    <div id="card-container">
      {news.length > 0 &&
        news.map((newsItem) => (
          <article>
            <img src={newsItem.urlToImage} alt="Article header" />
            <h2>{newsItem.title}</h2>
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>
            <a href={newsItem.url}>Read more</a>
          </article>
        ))}
    </div>
  );
}

export default Card;
