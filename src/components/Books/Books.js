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
        <div className='col-12'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-10 text-center'>
              <p className='quote'>	
              "What an astonishing thing a book is. It's a flat object made from a tree with flexible parts on which are imprinted lots of funny dark squiggles. But one glance at it and you're inside the mind of another person, maybe somebody dead for thousands of years. Across the millennia, an author is speaking clearly and silently inside your head, directly to you. Writing is perhaps the greatest of human inventions, binding together people who never knew each other, citizens of distant epochs. Books break the shackles of time. A book is proof that humans are capable of working magic." 
              <div>— Carl Sagan</div>
              </p>
            </div>
          </div>
            <div className='row justify-content-center notes-info'>
              <p>
                I created this because I've wanted to distill down ideas and quotes that I found interesting from various books. Having all these in one place and <strong>searchable</strong> makes returning to certain ideas more accessible. Some of these notes I've written myself from what I read, while others are simply quotes from the book.
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
