import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";
import { FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setQuoteAuthor] = useState("");

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = () => {
    fetch("https://dummyjson.com/quotes/random")
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data.quote;
        const randomQuoteAuthor = data.author;
        setQuote(randomQuote);
        setQuoteAuthor(randomQuoteAuthor);
      })
      .catch((error) => {
        console.log("Error fetching quote:", error);
      });
  };
  const [randomColor, setRandomColor] = useState("");

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    do {
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    } while (color === "#FFFFFF"); // Continue generating colors until it's not white
    return color;
  };

  const changeColors = () => {
    const color = getRandomColor();
    setRandomColor(color);

    const allElements = document.querySelectorAll("*");
    allElements.forEach((element) => {
      element.style.backgroundColor = color;
      element.style.color = color;
    });
  };

  useEffect(() => {
    changeColors();
  }, []);

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <p id="author">{author}</p>
      <div id="wrapper">
        <div id="wrapper-left">
          <a
            href="https://twitter.com/intent/tweet"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitterSquare />
          </a>
          <a href="https://www.tumblr.com/" rel="noreferrer" target="_blank">
            <FaTumblrSquare />
          </a>
        </div>
        <button id="tweet-quote" onClick={(fetchQuote, changeColors)}>
          Next Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteGenerator;
