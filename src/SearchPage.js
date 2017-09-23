import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


class SearchPage extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired,
    clearQuery: PropTypes.func.isRequired
  }

  componentWillMount () {
      this.props.clearQuery()
    }

render(){

  const { books, onChangeShelf, query, updateQuery, clearQuery } = this.props

  return (
     <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
           <div className="search-books-input-wrapper">

            {/*JSON.stringify(this.state.query) */}
             <input type="text" placeholder="Search by title or author"
               value={query}
               onChange={(event) =>  updateQuery(event.target.value)}
               />
           </div>
         </div>


      if ({books !== []}) {
         <div className="search-books-results">
            <ol className="books-grid">
             {books.map(book => (
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover"
                      style={{ width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                      </div>

                     <div className="book-shelf-changer">
                         <select key={book.name} value="{book.shelf}" onChange={(event) => onChangeShelf(book, event.target.value)}>
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
