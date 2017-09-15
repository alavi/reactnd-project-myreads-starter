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
    query: '',
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
  updateQuery = (query) => {
     this.setState({ query: query.trim() })
     console.log('in updateQuery function! query = ' + query)
     query.length !=0 && BooksAPI.search(query,20).then((books) => {
         this.setState({ books })
     })
   }

  searchBooks = (query) => {
    console.log('in searchBooks function! query = ' + query)
if (query) {
    BooksAPI.search(query,20).then((books) => {
        this.setState({ books })
    })
  }
}

  clearQuery = () => {
      this.setState({ query: '' })
    }



  render() {
    //const { query } = this.state.query


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
                <input type="text" placeholder="Search by title or author"
                  value={this.state.query}
                  onChange={(event) =>  this.updateQuery(event.target.value)}
                  />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.books && this.state.books.map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>


                      <div className="book-shelf-changer">
                          <select key={book.name} value={book.shelf} onChange={(event) => this.updateShelf(book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                      </div>

                    </div>
                    <div className="book-title">{book.title}</div>
                   {/*<div className="book-authors">{book.authors}</div>
                   */}
                    <div className="book-authors">
                      {book.authors.map(author => (
                        <p key={author}> {author} </p>))
                      }
                    </div>
                  </div>
                </li>
              ))
            }
              </ol>
            </div>


          </div>
        ) : (

        //  <Route exact path='/' render={() => (

        <div className="search-books-results">

           <ListBooks
              onChangeShelf={this.updateShelf}
              books={this.state.books}
           />

           <div className="open-search">

              <a onClick={() =>  this.setState({ showSearchPage: true })}>Add a book</a>

          </div>

        </div>

        )


    }



    </div>

    )
  }
}

export default BooksApp
