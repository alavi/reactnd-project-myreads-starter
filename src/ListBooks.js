import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//import ShelfSelector from './ShelfSelector.js'

class  ListBooks extends Component {
  static propTypes = {
    myReads: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired

  }

listBooks = (books, shelfName)   => {
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
            ))
          }
           </ol>
          </div>
         </div>
  )
}

render(){
  console.log(this.props)
  const { myReads, onChangeShelf } = this.props


    let showingBooks
    showingBooks = myReads

//  showingBooks.sort(sortBy('title'))
//  showingBooks = books
console.log(showingBooks)
let currentlyReading = showingBooks.filter((book) => (book.shelf === 'currentlyReading'))
let wantToRead = showingBooks.filter((book) => (book.shelf === 'wantToRead'))
let read = showingBooks.filter((book) => (book.shelf === 'read'))
console.log(currentlyReading)
   return (

     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
         <div className="list-books-content">
             {this.listBooks(currentlyReading, "Currently Reading")}
             {this.listBooks(wantToRead, "Want To Read")}
             {this.listBooks(read, "Read")}
             <div className="open-search">
                <Link to="/search" >Add a book</Link>
             </div>
          </div>
      </div>
   )
 }
}

export default ListBooks
