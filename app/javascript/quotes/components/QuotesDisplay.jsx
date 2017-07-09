import React from 'react'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import axios from 'axios'
import QuoteText from './QuoteText'
import QuoteNavigation from './QuoteNavigation'
import QuoteFooter from './QuoteFooter'

class QuotesDisplay extends React.Component {
  constructor () {
    super()
    this.state = {
      quote: {},
      fireRedirect: false
    }
  }

  fetchQuote (id) {
    axios.get(`api/quotes/${id}`)
        .then(response => {
          this.setState({ quote: response.data })
        })
        .catch(error => {
          console.error(error)
          this.setState({ fireRedirect: true })
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
        <div className='quote-container'>
          {this.state.fireRedirect &&
          <Redirect to={'/'} />
            }
          {previousQuoteId &&
          <QuoteNavigation direction='previous' otherQuoteId={previousQuoteId} />
            }
          <QuoteText quote={this.state.quote} />
          {nextQuoteId &&
          <QuoteNavigation direction='next' otherQuoteId={nextQuoteId} />
            }
        </div>
        {this.state.quote.id !== Number(this.props.startingQuoteId) &&
          <QuoteFooter startingQuoteId={this.props.startingQuoteId} />
        }
      </div>
    )
  }
}

export default QuotesDisplay
