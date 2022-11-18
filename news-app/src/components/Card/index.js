import React from "react";
import App from '../App/App.js'

function Card({props}) {


return (
    <div>
        {props.map((newsItem) => (
            <>
            <h1>{newsItem.title}</h1>
            <img src={newsItem.urlToImage} alt="Article header"/>
            <p>{newsItem.description}</p>
            <p>{newsItem.content}</p>
            <a href={newsItem.url}>Read more</a>
            </>    
        ))}
    </div>
)};