import React, { Component } from 'react'
class ShelfSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'currentlyReading'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  //  alert('Your selected shelf  is: ' + this.state.value);
    alert('Your selected shelf  is: ' + event.target.value);
  }

  handleSubmit(event) {
    alert('Your selected shelf  is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    // <form onSubmit={this.handleSubmit}>
      <div className="book-shelf-changer">
          <select value={this.state.value} onChange={this.handleChange}>
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
