import React from 'react'

const BooksList = ({ books }) => {
  return (
    <div className='row justify-content-center'>
      {books.map( (book, i) => {
        return (
            <div className='col-12 col-sm-10 entry' key={i} >
                <div className='row'>
                    <div className='col-12 col-sm-3'>
                        <img className= 'book-image' src={book.imageURL} alt={book.title} />
                    </div>
                    <div className='col-12 col-sm-9 info'>
                        <div className='title'>{book.title}</div>
                        <div className='author'>{book.author}</div>     
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default BooksList;
