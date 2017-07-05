import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

const quotes = document.querySelector('#quotes')

ReactDOM.render(<App startingQuoteId={quotes.dataset.startingQuoteId} />, quotes)
