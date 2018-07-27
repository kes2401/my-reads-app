import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class Search extends React.Component {

	state = {
		results: [],
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
		if (query.length) {
			BooksAPI.search(query).then((books) => {
				this.setState({results: books})
			})
		}	
	}

	updateBook = (bookId, shelf) => {
	    BooksAPI.update({id: bookId}, shelf);
    }

	render() {
		return (
				<div className="app">
	    	        <div className="search-books">
		        	    <div className="search-books-bar">
		       		  	  <Link className="close-search" to='/'>Close</Link>
		              		<div className="search-books-input-wrapper">
		            	      <input type="text" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} placeholder="Search by title or author"/>
		              		</div>
		            	</div>
		                <div className="search-books-results">
		              <ol className="books-grid">           	
		              		{this.state.results.map((book) => (
		              			<Book key={book.id} bookId={book.id} value={book.shelf} updateBookshelf={this.updateBook} book={book} thumbnail={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
		              		))}
		              </ol>
		            </div>
		          </div>
	            </div>    	
   		)
	}
}

export default Search;