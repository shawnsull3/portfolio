import React from 'react';
import '../styles/About.css';

const About = () => {

    return (
      <div className='col-12'>
        <div className='row justify-content-center'>
          portrait photo place holder
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/03/Iowa-Outline-Map.jpg" alt="Iowa" /> 
          </div>
          <div className='col-12 col-sm-6 block align-self-center'>
            Born and raised in Iowa. Developed a deep love of legos and realized my future did not lie within sports. Attended the University of Iowa (S’Go Hawks!) and graduated with a B.S. in Chemical Engineering and a minor in Chemistry.
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 block align-self-center'>
            Moved to Colorado for my  first job out of college as a Lab Engineer at <a href='https://www.molecularproducts.com/'>Molecular Products</a>, an air purification company. Here I honed my engineering mind and deepened my love for problem solving, which led me to my next venture of software engineering.
          </div>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" /> 
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 block'>
            <img className='stateImg' src="https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg" alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 block align-self-center'>
            Enrolled in the <a href='https://www.galvanize.com/web-development'>Software Engineering Immersive Program</a> through Galvanize. Throughout the program I learned the ins and outs of full stack JavaScript development by building and deploying web and mobile applications. 
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2 className='currently'>
              Currently
            </h2>
          </div>
          <div>
            <p className='currently-text'>
              I’m working on a few side projects while looking for a position to lend and expand my software engineering knowledge. If you think I’d be a good addition to your team or have any questions for me, reach out!
            </p>
          </div>
        </div>
      </div>
    )
}

export default About;
