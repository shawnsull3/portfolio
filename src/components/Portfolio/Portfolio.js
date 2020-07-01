import React, { Component } from 'react';
import PortfolioList from './PortfolioList';
import '../../styles/Portfolio.css';

import seedspot from './ProjectPictures/seedspot.png';
import metrics from './ProjectPictures/trackit-metrics.png';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
        projects: [
          {
            title: 'SeedSpot',
            subtitle: 'Find Quality Investors for Your Startup',
            description: 'Placeholder text for the time being. Placeholder text for the time being. Placeholder text for the time being.',
            technologies: ['React', 'Node.js', 'AirTable', `Twilio's SendGrid`],
            githubLink: 'https://github.com/shawnsull3/seedspot',
            photos: [seedspot]
          },
          {
            title: 'trackIt',
            subtitle: 'Track and Improve Your Daily Habits',
            description: 'Placeholder text for the time being. Placeholder text for the time being. Placeholder text for the time being.',
            technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
            githubLink: 'https://github.com/shawnsull3/trackit',
            photos: [metrics]
          }
        ]
    }
  }

  render() {
    const { projects } = this.state;

    return (
      <div className='col-12'>
        <div className='row portfolio'>
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
