import '../stylesheets/quote_button.css';
import React from 'react';

function QuoteButton({ children, manageClick }) {

  return (
    <button className='container-quote-button' onClick={manageClick}>{children}</button>
  )
  
}

export default QuoteButton;