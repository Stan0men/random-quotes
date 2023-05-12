import React, { useState, useEffect } from "react";
import "./QuoteGenerator.css";

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

  return (
    <div id="quote-box">
      <p id="text">{quote}</p>
      <div id="wrapper">
        <div id="wrapper-left">icons</div>
        <div id="wrapper-right">
          <p id="author">{author}</p>
          <button onClick={fetchQuote}>Generate Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QuoteGenerator;
