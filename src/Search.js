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

		this.setState({query: query})

		if (query === '') {
			this.setState({results: []});
		}
	
		if (query.length) {
			BooksAPI.search(query).then((books) => {
				if (books.error) {
					this.setState({results: []});
				} else {
					let updatedBooks = this.getCurrentShelf(this.props.books, books);
					this.setState({results: updatedBooks});
				}
			})
		}	
	}

	getCurrentShelf = (currentBooks, searchResults) => {	
		for (let i = 0; i < currentBooks.length ; i++) {
			for (let j = 0; j < searchResults.length; j++) {
				
				if (searchResults[j].id === currentBooks[i].id) {
					searchResults[j].shelf = currentBooks[i].shelf;
				} 
			}
		}			

		return searchResults;
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
		              			<Book key={book.id} bookId={book.id} shelf={book.shelf ? book.shelf : 'none'} onUpdateShelf={this.props.onUpdateShelf} book={book} title={book.title} authors={book.authors} />
		              		))}
		              </ol>
		            </div>
		          </div>
	            </div>    	
   		)
	}
}

export default Search;