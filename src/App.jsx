import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Success isn't measured by money or power or social rank. Success is measured by your discipline and inner peace.");
  const [author, setAuthor] = useState("Mike Ditka");

  const API_URL = "https://api.api-ninjas.com/v1/quotes?category=money";
  const API_KEY = "sehYdTQQZjvDT2K7FA2xXQ==c2G6rPpGYVsw47Q2";

  const GenerateNewQuote = async () => {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'X-Api-Key': API_KEY
        }
      });
      const data = await response.json();
      setQuote(data[0].quote); 
      setAuthor(data[0].author); 
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  return (
    <div className='quote-box'>
      <h1 id='text'>{quote}</h1>
      <p id='author'>{author}</p>
      <button id='new-quote' onClick={GenerateNewQuote}>New Quote</button>
      <a href={`twitter.com/intent/tweet`} id='tweet-quote'>Tweet Quote</a>
    </div>
  );
}

export default App;
