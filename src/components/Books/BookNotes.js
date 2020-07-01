import React from 'react';

const BookNotes = ({ match }) => {
  const { params: { bookTitle } } = match;
  return (
    <div>
        {bookTitle}
    </div>
  )
}

export default BookNotes;