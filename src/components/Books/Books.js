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
            <div className='row justify-content-center'>Description about these notes</div>
            <div className='row'>
              <BooksList books={this.state.books} />
            </div>
        </div>
    )
  }
}

export default Books;
