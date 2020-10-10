import React from 'react';
import { Link } from 'react-router-dom';

const BooksList = ({ books }) => {
  return (
    <div className='row justify-content-center'>
      {books.map( (book, i) => {
        return (
            <div className='col-12 col-sm-10 entry book-entry' key={i} >
                <div className='row'>
                    <div className='col-12 col-sm-3'>
                        <img className= 'book-image' src={book.imageURL} alt={book.title} />
                    </div>
                    <div className='col-12 col-sm-9 info'>
                        <h4>
                          <Link className='title' to={`/books/${book.title}`} >{book.title}</Link>
                        </h4>
                        <h5 className='author'>{book.author}</h5>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default BooksList;
