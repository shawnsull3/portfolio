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
          <div className='col-4'>Contact info</div>
        </div>
    )
}

export default withRouter(Header)