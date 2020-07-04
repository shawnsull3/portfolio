import React from 'react';
import quotes from './common/quotes';
import '../styles/Home.css';

const Home = () => {
    const randomIndex = Math.floor(Math.random() * ((quotes.length-1) - 0 + 1) + 0);
    return (
        <div className='col-12'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 text-center'>
              <p className='quote'>{quotes[randomIndex]}</p>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8'>
                <h4 className='text-center'>Me in 20 seconds</h4>
                I am a..
                <ul>
                    <li>Convert software developer from the chemical engineering realm, who’s currently looking for a project to contribute my software skills to.</li>
                    <li>Generalist who enjoys damn near everything: reading, biking, coding, hiking, music, cooking, and the list goes on ad infinitum.</li>
                    <li>Self-proclaimed nerd, problem solver, amateur musician, and clumsy adventurer.</li>
                </ul>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 text-center'>
              <h4>Skills</h4>
            </div>
          </div>

        </div>
    )
}

export default Home;