import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

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
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.books.filter(book => book.shelf === 'currentlyReading')
                          .map(book => (
                            <Book key={book.id} bookId={book.id} value={book.shelf} updateBookshelf={this.updateBook} book={book} thumbnail={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
                          ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.books.filter(book => book.shelf === 'wantToRead')
                          .map(book => (
                            <Book key={book.id} bookId={book.id} value={book.shelf} updateBookshelf={this.updateBook} book={book} thumbnail={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
                          ))}
                      </ol>
                    </div>
                  </div>
                  <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
                        {this.state.books.filter(book => book.shelf === 'read')
                          .map(book => (
                            <Book key={book.id} bookId={book.id} value={book.shelf} updateBookshelf={this.updateBook} book={book} thumbnail={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
                          ))}
                      </ol>
                    </div>
                  </div>
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