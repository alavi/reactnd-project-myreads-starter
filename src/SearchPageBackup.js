import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Throttle } from 'react-throttle'

class SearchPage extends Component {

  static propTypes = {
    myReads: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    books: [],
    query: ''
  }

  updateQuery = (query) => {
    if (query !== ''){
      this.setState({query: query})
      BooksAPI.search(query, 10).then(searchResults => {
          let results = (!searchResults || searchResults.error) ? [] : searchResults

          ////////

        //  if (results !== []) {
          //         results.map(book => (
            //        this.props.myReads(l => l.id = book.id ? (book.shelf = l.shelf) : (book.shelf = "none")))
            //        console.log("inside updateQuery")
                    //console.log(this.props.myReads.find(l => l.id = book.id) )
              //   )}
            //  results.map(l => l.shelf = "currentlyReading")
          //////

          this.setState({
            books: results
          })
        }).catch(err => {
          this.setState({books: []})
        }
        )
      } else {
        this.setState({
          query: '',
          books: []})
      }
      console.log(this.state.books)
  }

render() {

  const {  onChangeShelf, myReads } = this.props
  //console.log(myReads.find(o => o.title ="Learning Web Development with React and Bootstrap"))
  if (this.state.books !== []) {

    this.state.books.forEach((item) => {
       item.shelf =  myReads.find((book) => book.id === item.id) ?  myReads.find((book) => book.id === item.id).shelf : "none"
    })
  }
  return (
     <div className="search-books">
         <div className="search-books-bar">
           <Link className="close-search" to="/">Close</Link>
           <div className="search-books-input-wrapper">

            {/*JSON.stringify(this.state.query) */}
            <Throttle time="200" handler="onchange">
             <input type="text" placeholder="Search by title or author"
               value={this.query}
               onChange={(event) =>  this.updateQuery(event.target.value)}
               />
            </Throttle>
           </div>
         </div>

         <div className="search-books-results">
            <ol className="books-grid">
             {this.state.books.map(book => (
               //Here you should if the books that you got from the search isn't already in one of your shelves.
               // If so, you should show its shelf in the status, otherwise it should be none.
               // You can use the myReads state in the App to do this check
               <li key={book.id}>
                 <div className="book">
                   <div className="book-top">
                     <div className="book-cover"
                      style={{ width: 128, height: 193,
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                      </div>

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
           ))}
           </ol>
        </div>

      </div>
 )
}
}

export default SearchPage
