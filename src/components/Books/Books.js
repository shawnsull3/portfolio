import React, { Component } from 'react';
import BooksList from './BooksList';
import '../../styles/Books.css';

export class Books extends Component {
  constructor(props) {
        super(props);
        this.state = {
            books: [
                {title: 'This Is Marketing',
                 author: 'Seth Godin',
                 imageURL: 'https://m.media-amazon.com/images/I/51jghc53uvL.jpg'
                },
                {title: 'The Demon Haunted World: Science as a Candle in the Dark',
                author: 'Carl Sagan',
                imageURL: 'https://m.media-amazon.com/images/I/51G1EqfwiqL.jpg'
               },
               {title: 'How to Change Your Mind',
               author: 'Michael Pollan',
               imageURL: 'https://images-na.ssl-images-amazon.com/images/I/81z1rs6gVlL.jpg'
              },
            ],
            
        }
  }

  render() {
    return (
        <div className='col-12 aaa'>
            <div className='row justify-content-center notes-info'>
              <p>
                I created this because I've wanted to distill down ideas and quotes that I found interesting from various books. Having all these in one place and <strong>searchable</strong> makes returning to certain ideas more accessible.
              </p>
              <p>
                Some of these notes I've written myself from what I read, while others are simply quotes. Thus, direct quotes are shown in, well, quotes obviously. 
              </p>
              <p>
                Simply click on the book title or image to see my notes. Cheers.
              </p>
            </div>
            <div className='row'>
              <BooksList books={this.state.books} />
            </div>
        </div>
    )
  }
}

export default Books;
