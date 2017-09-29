import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'

class  MainPage extends Component {
  static propTypes = {
    myReads: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
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
            <ListBooks
                 books={currentlyReading} shelfName="Currently Reading" onChangeShelf={onChangeShelf}
            />
            <ListBooks
               books={wantToRead}  shelfName="Want To Read" onChangeShelf={onChangeShelf}
            />
            <ListBooks
               books={read} shelfName="Read" onChangeShelf={onChangeShelf}
            />
            <div className="open-search">
                <Link to="/search" >Add a book</Link>
            </div>
          </div>
      </div>
   )
 }
}

export default MainPage
