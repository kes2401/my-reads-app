import React from 'react';
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

class BookList extends React.Component {

  render() {
  	return  (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Shelf books={this.props.books} shelf='currentlyReading' onUpdateShelf={this.props.onUpdateShelf} shelfTitle='Currently Reading' />  
                  <Shelf books={this.props.books} shelf='wantToRead' onUpdateShelf={this.props.onUpdateShelf} shelfTitle='Want to Read' />  
                  <Shelf books={this.props.books} shelf='read' onUpdateShelf={this.props.onUpdateShelf} shelfTitle='Read' />  
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