import '../stylesheets/quote_button_t.css';
import React from 'react';

function QuoteButtonT({ children, manageTweet }) {

  return (
    <a href={"https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + manageTweet} target='_blank'>
      <button className='container-quote-button'>{children}</button>
    </a>
  )
  
}

export default QuoteButtonT;