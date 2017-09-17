import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
//import ShelfSelector from './ShelfSelector.js'

class SearchPage extends Component {

  static propTypes = {

    onNavigate: PropTypes.func.isRequired,
    onChangeShelf: PropTypes.func.isRequired

  }

  state = {
    query: '',
    books: []
 }



  updateQuery = (query) => {
    this.setState({query: query.trim()})
    console.log("inside update Query, query: " + query)
  }
  clearQuery = (query) => {
    this.setState({query: ''})
  }



render(){

  if (this.state.query !== ''){
    console.log ("query not empty! query= " + this.state.query)
    BooksAPI.search(this.state.query,20).then((books) => {
      this.setState({ books })})
    } else {
     console.log("empty query")
  }

  return (
     <div className="search-books">
         <div className="search-books-bar">
           <a className="close-search" onClick={this.props.onNavigate}>Close</a>
           <div className="search-books-input-wrapper">

             {JSON.stringify(this.state.query)}
             <input type="text" placeholder="Search by title or author"
               value={this.state.query}
               onChange={(event) =>  this.updateQuery(event.target.value)}
               />
           </div>
         </div>

         <div className="search-books-results">
            <ol className="books-grid">
             {this.state.books.map(book => (
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover"
                      style={{ width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                      </div>

                     <div className="book-shelf-changer">
                         <select key={book.name} value={book.shelf} onChange={(event) => this.props.onChangeShelf(book, event.target.value)}>
                           <option value="none" disabled>Move to...</option>
                           <option value="currentlyReading">Currently Reading</option>
                           <option value="wantToRead">Want to Read</option>
                           <option value="read">Read</option>
                           <option value="none">None</option>
                         </select>
                     </div>

                   </div>
                   <div className="book-title">{book.title}</div>

                   <div className="book-authors">
                     {book.authors.map(author => (
                       <p key={author}> {author} </p>))
                     }
                   </div>
                 </div>
               </li>
           ))}
           </ol>
       </div>
      </div>
 )
}
}

export default SearchPage
