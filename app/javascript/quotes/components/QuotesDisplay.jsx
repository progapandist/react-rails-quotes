import React from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'

class QuotesDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      quote: {}
    }
  }

  fetchQuote (id) {
    axios.get(`api/quotes/${id}`)
        .then(response => {
          this.setState({ quote: response.data })
        })
        .catch(error => {
          console.error(error)
        })
  }

  setQuoteIdFromQueryString (qs) {
    this.qsParams = queryString.parse(qs)
    if (this.qsParams.quote) {
      // assign quote ID from the URL's query string
      this.quoteId = Number(this.qsParams.quote)
    } else {
      this.quoteId = this.props.startingQuoteId
      // update URL in browser to reflect current quote in query string
      this.props.history.push(`/?quote=${this.quoteId}`)
    }
  }

  componentDidMount () {
    this.setQuoteIdFromQueryString(this.props.location.search)
    this.fetchQuote(this.quoteId)
  }

  componentWillReceiveProps (nextProps) {
    this.setQuoteIdFromQueryString(nextProps.location.search)
    this.fetchQuote(this.quoteId)
  }

  render () {
    const quote = this.state.quote
    const nextQuoteId = quote.next_id
    const previousQuoteId = quote.previous_id

    return (
      <div>
        {previousQuoteId &&
          <Link to={`/?quote=${previousQuoteId}`}>Previous </Link>
        }
        {nextQuoteId &&
          <Link to={`/?quote=${nextQuoteId}`}>Next</Link>
        }
        <p>{quote.text}</p>
        <p>{quote.author}</p>
      </div>
    )
  }
}

export default QuotesDisplay
