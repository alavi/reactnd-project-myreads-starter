import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import './App.css'
import PropTypes from 'prop-types'

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: []
  }


  componentDidMount () {

    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    console.log(this.state.books)
  }
  changeShelf(book, shelf){
  //  alert ('changeShelf has been called ' + book.title + 'shelf: ' + shelf )

    this.setState({books: BooksAPI.update(book, shelf)})


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
    BooksAPI.getAll().then((books) => {
        this.setState({ books })

    })

  }




  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
//console.log(this.state.books)
        //  <Route exact path='/' render={() => (
           <ListBooks
              onChangeShelf={this.updateShelf}
              books={this.state.books}
           />
        // )}/>
        )
    }
    </div>
    )
  }
}

export default BooksApp
