import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'

import BookList from './BookList'
import Search from './Search'


class BooksApp extends React.Component {

  render() {
    return  <div>
              <Route exact path='/' component={BookList} />
              <Route exact path='/search' component={Search} /> 
            </div>
  }
}

export default BooksApp