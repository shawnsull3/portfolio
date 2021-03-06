import React, { Component } from 'react';
import quotes from './common/quotes';
import '../styles/Home.css';
import '../../node_modules/animate.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        randomIndex: Math.floor(Math.random() * ((quotes.length-1) - 0 + 1) + 0)
    }
  }

  render() {

    return (
        <div className='col-12 animate__animated animate__fadeIn animate__slower'>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 col-lg-6 text-center'>
              <p className='quote'>{quotes[this.state.randomIndex]}</p>
              <i className="fa fa-random" onClick={() => {
                this.setState({ randomIndex: Math.floor(Math.random() * ((quotes.length-1) - 0 + 1) + 0) })
                
              }}></i>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 col-lg-6'>
                <h4 className='section-title text-center'>Me in 20 seconds</h4>
                I am a..
                <ul>
                    <li>Software developer converted from the chemical engineering realm, who’s currently looking for a full-time software engineering position.</li>
                    <li>Generalist who enjoys damn near everything: reading, biking, coding, climbing, music, cooking...the list goes on ad infinitum.</li>
                    <li>Self-proclaimed nerd, problem solver, amateur musician, and clumsy adventurer.</li>
                </ul>
            </div>
          </div>

          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 text-center'>
              <h4 className='section-title'>Software Skills</h4>
            </div>
            <div className='col-12 col-sm-8 col-lg-6 text-center'>
              <div className='row justify-content-center'>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/react-native.png"  
                    data-toggle="tooltip" data-placement="top" title="React & React Native" 
                    className="skill-icons" alt='react' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/redux.png"  
                    data-toggle="tooltip" data-placement="top" title="Redux" 
                    className="skill-icons" alt='Redux' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/html-5.png"
                    data-toggle="tooltip" data-placement="top" title="HTML" 
                    className="skill-icons" alt='HTML' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/javascript.png"
                    data-toggle="tooltip" data-placement="top" title="JavaScript" 
                    className="skill-icons" alt='JavaScript' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/bootstrap.png"
                    data-toggle="tooltip" data-placement="top" title="Bootstrap" 
                    className="skill-icons" alt='Bootstrap' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/nodejs.png"
                    data-toggle="tooltip" data-placement="top" title="Node.js" 
                    className="skill-icons" alt='Node.js' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/css3.png"
                    data-toggle="tooltip" data-placement="top" title="CSS" 
                    className="skill-icons" alt='CSS' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/amazon-web-services.png"
                    data-toggle="tooltip" data-placement="top" title="Aamazon Web Servies" 
                    className="skill-icons" alt='Aamazon Web Servies' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/postgreesql.png"
                    data-toggle="tooltip" data-placement="top" title="PostgreSQL" 
                    className="skill-icons" alt='PostgreSQL' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/graphql.png"
                    data-toggle="tooltip" data-placement="top" title="GraphQL" 
                    className="skill-icons" alt='GraphQL' />
                </div>
                <div className='skill-container'>
                  <img src="https://img.icons8.com/color/144/000000/mongodb.png"
                    data-toggle="tooltip" data-placement="top" title="MongoDB" 
                    className="skill-icons" alt='MongoDB' />
                </div>

              </div>
            </div>
          </div>

        </div>
    )
  }
}

export default Home;