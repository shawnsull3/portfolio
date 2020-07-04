import React from 'react';
import quotes from './common/quotes';
import '../styles/Home.css';

const Home = () => {
    const randomIndex = Math.floor(Math.random() * ((quotes.length-1) - 0 + 1) + 0);
    return (
        <div className='col-12'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-6 text-center'>
              <p className='quote'>{quotes[randomIndex]}</p>
            </div>
          </div>

        </div>
    )
}

export default Home;