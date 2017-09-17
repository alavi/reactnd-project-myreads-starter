import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    myReads: []

  }


  componentDidMount () {

    BooksAPI.getAll().then((myReads) => {
      this.setState({ myReads })

    })

  }



  updateShelf = (book, shelf) => {

  //  BooksAPI.update(book, shelf)
  //  this.setState((state) => ({
    //books: state.books}))
    console.log('here: BooksAPI.update: ' + book.title + ' moved to Shelf: ' + shelf)
    console.log(BooksAPI.update(book, shelf))

  //  BooksAPI.update(book, shelf).then((books) => {
    //  this.setState({ books })
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((myReads) => {
        this.setState({ myReads })

    })

  }

  render() {
    //const { query } = this.state.query

    return (
      <div className="app">
        <Route exact path="/search"  render={() => (
          <SearchPage onChangeShelf={this.updateShelf}
            books={this.state.books} />
          )}
          />

         <Route exact path="/list"  render={() =>(
           <ListBooks onChangeShelf={this.updateShelf}
              myReads={this.state.myReads}
              />)}
           />

      </div>

    )
  }
}

export default BooksApp
