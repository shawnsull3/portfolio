import React from 'react';
import resume from './Images/shawn-sullivan-resume.pdf';
import iowa from './Images/iowa.jpg';
import climb from './Images/climb.jpg'
import huron from './Images/huron.jpg';
import '../../styles/About.css';

const About = () => {

    return (
      <div className='col-12'>
        <div className='row justify-content-center'>
          <div className='col-6 text-center'>
            <p>portrait photo place holder</p>
            <p>sullivansm3@gmail.com</p>
            <p><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 text-center pt1'>
            <img className='aboutImg' src={iowa} alt="Iowa" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            <p>
              Born and raised in Iowa. Developed a deep love of legos and realized my future did not lie within sports. Attended the University of Iowa (S’Go Hawks!) and graduated with a B.S. in Chemical Engineering and a minor in Chemistry.
            </p>
          </div>
        </div>
        <div className='row flex-row-reverse'>
          <div className='col-12 col-sm-6 text-center pt2'>
            <img className='aboutImg' src={huron} alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            Moved to Colorado for my  first job out of college as a Lab Engineer at <a href='https://www.molecularproducts.com/' target='_blank' rel='noopener noreferrer'>Molecular Products</a>, an air purification company. Here I honed my engineering mind and deepened my love for problem solving, which led me to my next venture of software engineering.
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-sm-6 text-center pt3'>
            <img className='aboutImg' src={climb} alt="Colorado" /> 
          </div>
          <div className='col-12 col-sm-6 text-center align-self-center'>
            Enrolled in the <a href='https://www.galvanize.com/web-development' target='_blank' rel='noopener noreferrer'>Software Engineering Immersive Program</a> through Galvanize. Throughout the program I learned the ins and outs of full stack JavaScript development by building and deploying web and mobile applications. 
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
            <div className='col-6 text-center'>
              <i onClick={() => window.open('https://github.com/shawnsull3')} className="fa fa-github-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('https://www.linkedin.com/in/shawnsull3/')} className="fa fa-linkedin-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('mailto:sullivansm3@gmail.com')} className="fa fa-envelope contact-icons" aria-hidden="true"></i>
            </div>
        </div>
      </div>
    )
}

export default About;
