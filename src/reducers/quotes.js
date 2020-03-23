export default (state = [], action) => {
  let newArray
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      const newQuoteArray = state.filter(quote => 
        action.quoteId !== quote.id)
      return newQuoteArray
    
    case "UPVOTE_QUOTE":
      newArray = state.map(quote => {
        if (quote.id === action.quoteId) {
          return {...quote, votes: quote.votes + 1}
        } else {
          return quote
        }
      })
      return newArray

    case "DOWNVOTE_QUOTE":
      newArray = state.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0) {
          return {...quote, votes: quote.votes - 1}
        } else {
          return quote
        }
      })
      return newArray

    default:
      return state;
  }
}
