import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'

class BookList extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {this.setState({books})});
  }

  updateBook = (bookId, shelf) => {
    BooksAPI.update({id: bookId}, shelf).then(this.getBooks);
  }


  render() {
  	return  (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf books={this.state.books} shelf='currentlyReading' shelfTitle='Currently Reading' />  
                  <Shelf books={this.state.books} shelf='wantToRead' shelfTitle='Want to Read' />  
                  <Shelf books={this.state.books} shelf='read' shelfTitle='Read' />  
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )
  }
}

export default BookList;