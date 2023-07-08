import '../stylesheets/quote_text.css';
import React from 'react';

function QuoteText({ quoteText }) {

  return (
    <div className='container-quote-text'>
      {quoteText}
    </div>
  )
  
}

export default QuoteText;