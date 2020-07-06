import React from 'react';
import portrait from './Images/portrait.jpg';
import resume from './Images/shawn-sullivan-resume.pdf';
import iowa from './Images/iowa.jpg';
import climb from './Images/climb.jpg'
import huron from './Images/huron.jpg';
import '../../styles/About.css';

const About = () => {

    return (
      <div className='col-12'>
        <div className='row justify-content-center'>
          <div className='col-12 text-center'>
            <img className='about-portrait' src={portrait} alt='portrait of shawn' />
            <p className='full-name'>SHAWN SULLIVAN</p>
            <p className='occupation'>FULL-STACK SOFTWARE ENGINEER</p>
            <p className='about-info'><a className='about-links' href={'mailto:sullivansm3@gmail.com'} target='_blank' rel='noopener noreferrer'>sullivansm3@gmail.com</a></p>
            <p><a className='about-links about-info' href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></p>
          </div>
        </div>
        <div className='row pic-text-row'>
          <div className='col-12 col-sm-6 text-center pt1'>
            <img className='aboutImg' src={iowa} alt="Iowa" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            <p>
              Born and raised in Iowa. Developed a deep love of legos and quickly realized my future did not lie within sports. Attended the University of Iowa and graduated with a B.S. in Chemical Engineering and a minor in Chemistry.
            </p>
          </div>
        </div>
        <div className='row flex-row-reverse pic-text-row'>
          <div className='col-12 col-sm-6 text-center pt2'>
            <img className='aboutImg' src={climb} alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            Moved to Colorado to work as a Lab Engineer at <a className='about-links' href='https://www.molecularproducts.com/' target='_blank' rel='noopener noreferrer'>Molecular Products</a>, an air purification company. Here I honed my engineering mind and deepened my affection for solving technical problems, which led to my next venture of software engineering.
          </div>
        </div>
        <div className='row pic-text-row'>
          <div className='col-12 col-sm-6 text-center pt3'>
            <img className='aboutImg' src={huron} alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            Enrolled in the <a className='about-links' href='https://www.galvanize.com/web-development' target='_blank' rel='noopener noreferrer'>Software Engineering Immersive Program</a> through Galvanize. Throughout the program I learned the fundamentals of computer science and the intricacies of full stack JavaScript development. 
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
        <div className='row justify-content-center'>
            <div className='col-12 text-center'>
              <i onClick={() => window.open('https://github.com/shawnsull3')} className="fa fa-github-square about-contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('https://www.linkedin.com/in/shawnsull3/')} className="fa fa-linkedin-square about-contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('mailto:sullivansm3@gmail.com')} className="fa fa-envelope about-contact-icons" aria-hidden="true"></i>
            </div>
        </div>
      </div>
    )
}

export default About;
