import React from 'react'

const QuoteText = (props) => (
  <div className='quote'>
    <div className='quote-open'>“</div>
    <div className='quote-close'>”</div>
    <div className='quote-text'>
      {props.quote.text}
    </div>
    <div className='quote-author'>
      <em>— {props.quote.author}</em>
    </div>
  </div>
)

export default QuoteText
