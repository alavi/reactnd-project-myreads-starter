import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'

class SearchPage extends Component {

  static propTypes = {

    onChangeShelf: PropTypes.func.isRequired

  }

  state = {
    query: '',
    books: []
 }

  updateQuery = (query) => {

    console.log("inside update Query, query: " + query)

    if (query !== ''){

      BooksAPI.search(query, 10).then(searchResults => {
          let results = (!searchResults || searchResults.error) ? [] : searchResults
          this.setState({
            query: query,
            books: results
          })
        })

      } else {
        this.setState({
          query: '',
          books: []
        })
      }
      console.log()
      console.log(this.state.books.length)
      console.log("inside update Query, this.query: " + this.query)
  }

  clearQuery = (query) => {
    this.setState({query: ''})
  }

render(){

  const { onChangeShelf } = this.props

  return (
     <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
           <div className="search-books-input-wrapper">

             {JSON.stringify(this.state.query)}
             <input type="text" placeholder="Search by title or author"
               value={this.state.query}
               onChange={(event) =>  this.updateQuery(event.target.value)}
               />
           </div>
         </div>


      if ({this.state.books !== []}) {
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
                       <p key={author}>{author}</p>))
                     }
                   </div>
                 </div>
               </li>
           ))}
           </ol>
       </div>
     }
      </div>
 )
}
}

export default SearchPage
