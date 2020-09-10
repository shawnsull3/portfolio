import React, { Component } from 'react';
import PortfolioList from './PortfolioList';
import projects from './ProjectInfo';
import '../../styles/Portfolio.css';
import '../../../node_modules/animate.css'

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: projects
    }
  }

  render() {
    const { projects } = this.state;

    return (
      <div className='col-12 portfolio animate__animated animate__fadeIn animate__slower'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='portfolio-title'>
              Portfolio
            </h2>
          </div>
        </div>
        <div className='row'>
          <PortfolioList  projects={projects} />
        </div>
      </div>
    )
  }
}

export default Portfolio;
