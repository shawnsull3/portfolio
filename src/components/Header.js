import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import '../styles/Header.css';

const Header = () => {

    return (
        <div className='row header align-items-center'>
          <div className='col-4'>Slogan</div>
          <div className='col-4 justify-content-around'>
            <Link to='/portfolio' style={{ textDecoration: 'none' }} className='navLink'>
              Portfolio
            </Link>
            <Link to='/about' style={{ textDecoration: 'none' }} className='navLink'>
              About
            </Link>
            <Link to='/books' style={{ textDecoration: 'none' }} className='navLink'>
              Books
            </Link>
          </div>
          <div className='col-4'>
            <div className='row justify-content-end'>
              <i onClick={() => window.open('https://github.com/shawnsull3')} className="fa fa-github-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('https://www.linkedin.com/in/shawnsull3/')} className="fa fa-linkedin-square contact-icons" aria-hidden="true"></i>
              <i onClick={() => window.open('mailto:sullivansm3@gmail.com')} className="fa fa-envelope contact-icons" aria-hidden="true"></i>
            </div>
          </div>
        </div>
    )
}

export default withRouter(Header)