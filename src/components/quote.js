import React, { useState, useEffect } from 'react';
import './quote.css';

export default function Quote() {
  const [quotes, setQuotes] = useState({ quote: "", author: "" });

  const getQuote = () => {
    fetch("https://api.api-ninjas.com/v1/quotes", {
      method: 'GET',
      headers: {
        'X-Api-Key': 'zZYvPv5VOQrvxNm5Dctklg==NnYQM3VQarmyqibQ',
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      if (data.length > 0) {
        let ran = Math.floor(Math.random() * data.length);
        setQuotes(data[ran]);
      }
    })
    .catch((error) => {
      console.error("Error fetching quotes:", error);
    });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className='main'>
      <div className="te"> 
        <p>{quotes.quote}</p>
        <p className='author'>- {quotes.author}</p>  

        <button className='btn btn-rounded quote mx-3' onClick={getQuote}>
          𝔊𝔢𝔱 𝔔𝔲𝔬𝔱𝔢
        </button>

        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quotes.quote + " - " + quotes.author)}`}
          className="btn btn-rounded quote"
          rel='noopener noreferrer' 
          target="_blank">
          ȶաɛɛȶ
        </a>
      </div>
    </div>
  );
}
