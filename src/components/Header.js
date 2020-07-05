import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import portrait from './About/Images/portrait.jpg';
import '../styles/Header.css';

const Header = () => {

    return (
        <div className='row header align-items-center'>
          <div className='col-2 col-sm-2'>
          <img className='avatar' src={portrait} alt='portrait of shawn' />
          </div>
          <div className='col-10 col-sm-8 justify-content-around text-center'>
            <Link to='/' className='navLink'>
              Home
            </Link>
            <Link to='/portfolio' className='navLink'>
              Portfolio
            </Link>
            <Link to='/about' className='navLink'>
              About
            </Link>
            <Link to='/books' className='navLink'>
              Books
            </Link>
          </div>
          <div className='col-12 col-sm-2'>
            <div className='row justify-content-center'>
              <i onClick={() => window.open('https://github.com/shawnsull3')} className="fa fa-github-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('https://www.linkedin.com/in/shawnsull3/')} className="fa fa-linkedin-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('mailto:sullivansm3@gmail.com')} className="fa fa-envelope contact-icons" aria-hidden="true"></i>
            </div>
          </div>
        </div>
    )
}

export default withRouter(Header)