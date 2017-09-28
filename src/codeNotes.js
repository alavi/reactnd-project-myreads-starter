//From App.js
updateShelf = (book, shelf) => {
    //console.log ("in updateShelf:" + book.title + ' ' + book.shelf + ' New Shelf:' + shelf)
  //  console.log (this.state)
  //  console.log(JSON.stringify(BooksAPI.update(book, shelf)))

    BooksAPI.update(book, shelf).then ( () => {

      book.shelf = shelf
      console.log ("in updateShelf:" + book.title + ' ' + book.shelf + ' New Shelf:' + shelf)
      this.setState(prevState => {
          // remove the book from prevState.myReads and then add it back
         // so it will appears in the end of its new shelf, then return an object with the new
         //console.log (prevState.myReads.filter(item => item.title === book.title))
         return prevState.myReads.concat(prevState.myReads.filter(item => item.title === book.title))
      })
    })
  }
