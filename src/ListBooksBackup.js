import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class  ListBooks extends Component {
  static propTypes = {
    myReads: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

listBooks = (books, shelfName, onChangeShelf)   => {
  return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="search-books-results">
            <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select key={book.id} value={book.shelf} onChange={(event) => onChangeShelf(book, event.target.value)}>
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
            ))
          }
           </ol>
          </div>
         </div>
  )
}

render(){

  const { myReads, onChangeShelf} = this.props

//  if (this.state.books !== []) {

//    this.state.books.forEach((item) => {
//       item.shelf =  myReads.find((book) => book.id === item.id) ?  myReads.find((book) => book.id === item.id).shelf : "none"
//    })
//  }

  let currentlyReading = myReads.filter((book) => (book.shelf === 'currentlyReading'))
  let wantToRead = myReads.filter((book) => (book.shelf === 'wantToRead'))
  let read = myReads.filter((book) => (book.shelf === 'read'))

   return (

     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
         <div className="list-books-content">
             {this.listBooks(currentlyReading, "Currently Reading", onChangeShelf)}
             {this.listBooks(wantToRead, "Want To Read", onChangeShelf)}
             {this.listBooks(read, "Read", onChangeShelf)}
             <div className="open-search">
                <Link to="/search" >Add a book</Link>
             </div>
          </div>
      </div>
   )
 }
}

export default ListBooks
