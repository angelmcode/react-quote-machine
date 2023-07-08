import '../stylesheets/quote_machine.css';
import React, { useEffect, useState } from 'react';
import QuoteText from './quote_text';
import QuoteAutor from './quote_autor';
import QuoteButton from './quote_button';
import { quotes } from "../data/quotes.js";
import QuoteButtonT from './quote_button_t';

function QuoteMachine() {

  const [quote, setQuote] = useState("");

  const [autor, setAutor] = useState("");


  useEffect(() => {
    let num = Math.floor(Math.random() * (quotes.length - 0) + 0);
    console.log(quotes.length);
    setQuote('"' + quotes[num].text + '"');
    setAutor('"' + quotes[num].autor + '"');
    console.log("hi");
  }, []);

  const manageClick = () => {
    let num = Math.floor(Math.random() * (quotes.length - 0) + 0);
    console.log(quotes.length);
    setQuote('"' + quotes[num].text + '"');
    setAutor('"' + quotes[num].autor + '"');
  }

  const manageTweet = quote + autor;

  return (
    <div className='container-quote-machine'>
        <QuoteText quoteText={quote}/>
        <QuoteAutor quoteAutor={autor}/>
        <div className='container-quote-buttons'>
            <QuoteButtonT manageTweet={manageTweet}>Tweet</QuoteButtonT>
            <QuoteButton manageClick={manageClick}>New Quote</QuoteButton>
        </div>
    </div>
  )

}

export default QuoteMachine;