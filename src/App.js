import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

import BookList from './BookList'
import Search from './Search'


class BooksApp extends React.Component {

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
    	return (
    			<div>
        	    	<Route exact path='/' render={(props) => <BookList {...props} books={this.state.books} onUpdateShelf={this.updateBook} />} />
            		<Route exact path='/search' render={(props) => <Search {...props} books={this.state.books} onUpdateShelf={this.updateBook} />} /> 
           		</div>
           	   )	
  	}
}

export default BooksApp