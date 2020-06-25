import React from 'react'

const BooksList = ({ books }) => {
  return (
    <div className='row justify-content-center'>
      {books.map( (book, i) => {
        return (
            <div className='col-8 entry' key={i} >
                <div>{book.title}</div>
                <div>{book.author}</div>
                <img className='book-image' src={book.imageURL} alt={book.title} />
            </div>
        )
      })}
    </div>
  )
}

export default BooksList;
