import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

class ShelfSelector extends React.Component {


  static propTypes = {
    book: PropTypes.object.isRequired
  }

  state = {
    shelf: ''

  }

  onChangeShelf(event) {
    this.setState({shelf: event.target.value});
  //  alert('Your selected shelf  is: ' + this.state.value);
    alert('Your selected shelf  is: ' + event.target.value);
  //  this.setState({ shelf: BooksAPI.update(book, event.target.value)})
  }

  updateShelf = (book) => {
    this.setState((state) => (BooksAPI.update(book, this.state.shelf)
    ))
  }

  handleSubmit(event) {
    alert('Your selected shelf  is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { book, onChangeShelf } = this.props
    return (
    // <form onSubmit={this.handleSubmit}>
      <div className="book-shelf-changer">
          <select key={book.name} value={book.shelf} onChange={(event) => this.onChageShelf(event.target.value)}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
      </div>
    //    <input type="submit" value="Submit" />
  //  </form>
    );
  }
}

export default ShelfSelector
{/*}
ReactDOM.render(
  <ShelfSelector />,
  document.getElementById('root')
);
*/}
