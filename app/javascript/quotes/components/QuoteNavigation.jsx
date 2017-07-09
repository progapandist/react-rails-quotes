import React from 'react'
import { Link } from 'react-router-dom'

const QuoteNavigation = (props) => {
  let element = null
  if (props.direction === 'previous') {
    element = (
      <Link className='link-previous' to={`/?quote=${props.otherQuoteId}`}>
        <i className='fa fa-angle-left' aria-hidden='true'><span /></i>
      </Link>
    )
  } else {
    element = (
      <Link className='link-next' to={`/?quote=${props.otherQuoteId}`}>
        <i className='fa fa-angle-right' aria-hidden='true'><span /></i>
      </Link>
    )
  }
  return element
}

export default QuoteNavigation
