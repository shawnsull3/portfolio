import React from 'react';
import '../styles/About.css';

const About = () => {

    return (
      <div>
        <div className='row justify-content-center'>
          portrait photo place holder
        </div>
        <div className='row justify-content-around full-width'>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/03/Iowa-Outline-Map.jpg" alt="Iowa" /> 
          </div>
          <div className='col-12 col-sm-6 block align-self-center'>
            A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text.
          </div>
        </div>
        <div className='row justify-content-around full-width'>
          <div className='col-12 col-sm-6 block align-self-center'>
            A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text.
          </div>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" /> 
          </div>
        </div>
        <div className='row justify-content-around full-width'>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 block align-self-center'>
            A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text. A whole bunch of text.
          </div>
        </div>
      </div>
    )
}

export default About;

{/* <img className={classes.stateImg} src="https://gisgeography.com/wp-content/uploads/2020/03/Iowa-Outline-Map.jpg" alt="Iowa" /> */}
{/* <img className={classes.stateImg} src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" /> */}