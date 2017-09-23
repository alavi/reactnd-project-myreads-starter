import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
    myReads: []
  }

  componentDidMount () {
    BooksAPI.getAll().then((myReads) => {
      this.setState({ myReads })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((myReads) => {
        this.setState({ myReads })
    })
  }



  render() {

    return (
      <div className="app">
        <Route exact path="/search"  render={() => (
          <SearchPage
            onChangeShelf={this.updateShelf}
            />
          )}
          />

         <Route exact path="/"  render={() =>(
           <ListBooks onChangeShelf={this.updateShelf}
              myReads={this.state.myReads}              
              />)}
           />

      </div>

    )
  }
}

export default BooksApp
