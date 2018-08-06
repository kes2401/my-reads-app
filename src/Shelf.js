import React from 'react';
import Book from './Book';

const Shelf = (props) => {

	return (
			<div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelfTitle}</h2>
            	    <div className="bookshelf-books">
                		<ol className="books-grid">
                    	{props.books.filter(book => book.shelf === props.shelf)
                      	.map(book => (
                        	<Book key={book.id} bookId={book.id} value={book.shelf} shelf={book.shelf} onUpdateShelf={props.onUpdateShelf} book={book} thumbnail={book.imageLinks.thumbnail} title={book.title} authors={book.authors} />
                      	))}
                  	</ol>
                </div>
            </div>
	)
}

export default Shelf;