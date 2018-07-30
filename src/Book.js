import React from 'react';

const Book = (props) => {

	return (
		<li>
	        <div className="book">
	           <div className="book-top">
	             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks ? props.book.imageLinks.smallThumbnail : 'https://via.placeholder.com/128x193?text=no+image+found'})`}}></div>
	             <div className="book-shelf-changer">
	               <select onChange={(event) => (props.updateBookshelf(props.bookId, event.target.value))} value={props.value}>
	                 <option value="move" disabled>Move to...</option>
	                 <option value="currentlyReading">Currently Reading</option>
	                 <option value="wantToRead">Want to Read</option>
	                 <option value="read">Read</option>
	                 <option value="none">None</option>
	               </select>
	             </div>
	           </div>
	           <div className="book-title">{props.title}</div>
	           <div className="book-authors">{props.authors ? props.authors : "no author details"}</div>
	         </div>
	     </li>
	);
}

export default Book;