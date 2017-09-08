import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import sortBy from 'sort-by'
import ShelfSelector from './ShelfSelector.js'

class  ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

render(){
  console.log(this.props)
    const { books } = this.props
  //  console.log(books)
    const { query } = this.state

    let showingBooks
    if (query){
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title))

    } else {
      showingBooks = books
    }
    //showingBooks.sort(sortBy('title'))
//showingBooks = books
console.log(showingBooks)
let currentlyReading = showingBooks.filter((book) => (book.shelf == 'currentlyReading'))
let wantToRead = showingBooks.filter((book) => (book.shelf == 'wantToRead'))
let read = showingBooks.filter((book) => (book.shelf == 'read'))
console.log(currentlyReading)
   return (

     <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
           <div className="bookshelf">
             <h2 className="bookshelf-title">Currently Reading</h2>
             <div className="bookshelf-books">
               <ol className="books-grid">
               {currentlyReading.map(book => (
                 <li>
                   <div className="book">
                     <div className="book-top">
                       <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <ShelfSelector />
                     </div>
                     <div className="book-title">{book.title}</div>
                    {/*<div className="book-authors">{book.authors}</div>
                    */}
                     <div className="book-authors">
                       {book.authors.map(author => (
                         <p> {author} </p>))
                       }
                     </div>
                   </div>
                 </li>
               ))
             }
              </ol>
             </div>
            </div>
          </div>
        </div>

        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want To Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.map(book => (
                  <li>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                         <ShelfSelector />
                      </div>
                      <div className="book-title">{book.title}</div>
                     {/*<div className="book-authors">{book.authors}</div>
                     */}
                      <div className="book-authors">
                        {book.authors.map(author => (
                          <p> {author} </p>))
                        }
                      </div>
                    </div>
                  </li>
                ))
              }
               </ol>
              </div>
             </div>
           </div>
         </div>


         <div className="list-books-content">
           <div>
             <div className="bookshelf">
               <h2 className="bookshelf-title">Read</h2>
               <div className="bookshelf-books">
                 <ol className="books-grid">
                 {read.map(book => (
                   <li>
                     <div className="book">
                       <div className="book-top">
                         <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                          <ShelfSelector />
                       </div>
                       <div className="book-title">{book.title}</div>
                      {/*<div className="book-authors">{book.authors}</div>
                      */}
                       <div className="book-authors">
                         {book.authors.map(author => (
                           <p> {author} </p>))
                         }
                       </div>
                     </div>
                   </li>
                 ))
               }
                </ol>
               </div>
              </div>
            </div>
          </div>

      </div>
   )
 }
}

export default ListBooks
