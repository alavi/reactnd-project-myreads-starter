import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
    myReads: [],
    books: [],
    query: ''
  }

  componentDidMount () {
    BooksAPI.getAll().then((myReads) => {
      this.setState({ myReads })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((myReads) => {
        this.setState({ myReads })
    })
  }

  updateQuery = (query) => {
    if (query !== ''){
      this.setState({query: query})
      BooksAPI.search(query, 10).then(searchResults => {
          let results = (!searchResults || searchResults.error) ? [] : searchResults
          this.setState({
            books: results
          })
        })
      } else {
        this.setState({
          query: '',
          books: []})
      }
  }

  clearQuery = (query) => {
    this.setState({query: ''})
  }

  render() {

    return (
      <div className="app">
        <Route exact path="/search"  render={() => (
          <SearchPage
            books={this.state.books}
            onChangeShelf={this.updateShelf}
            query={this.state.query}
            updateQuery={this.updateQuery}
            clearQuery={this.clearQuery}
            />
          )}
          />

         <Route exact path="/"  render={() =>(
           <ListBooks onChangeShelf={this.updateShelf}
              myReads={this.state.myReads}
              clearQuery={this.clearQuery}

              />)}
           />

      </div>

    )
  }
}

export default BooksApp
