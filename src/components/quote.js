import React from 'react';
import './quote.css';
import {useState , useEffect} from 'react';

export default function Quote() {
  const [quotes,setQuotes]=useState(" ");
const getQuote =()=>{
fetch("https://type.fit/api/quotes")
.then((res)=>res.json())
.then((data) => {
  let ran = Math.floor(Math.random()*data.length);
  setQuotes(data[ran]);
} );
};
useEffect (()=>{getQuote();},
[ ]);


  return (
  <div className='main' >
    <div className="te"> 
    <p> {quotes.text}</p>
 <p className='author'>  - {quotes.author}</p>  
 
 <button className='btn btn-rounded quote mx-3 ' onClick={getQuote}>𝔊𝔢𝔱 𝔔𝔲𝔬𝔱𝔢</button>
 <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
  className="btn btn-rounded quote" rel='noopener noreferrer' target="_blank">ȶաɛɛȶ</a>

 
    </div>
    </div>

  )
}
