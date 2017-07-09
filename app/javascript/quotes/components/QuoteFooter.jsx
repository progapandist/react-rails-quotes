import React from 'react'
import { Link } from 'react-router-dom'

const QuoteFooter = (props) => (
  <div id='footer'>
    <Link className='btn btn-primary' to={`/?quote=${props.startingQuoteId}`}>
      Back to Beginning
    </Link>
  </div>
)

export default QuoteFooter
