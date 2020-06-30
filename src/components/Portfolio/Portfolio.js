import React, { Component } from 'react';
import '../../styles/Portfolio.css';

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
            github: 'https://github.com/shawnsull3/seedspot',
            photos: ['']
          },
          {
            title: 'trackIt',
            subtitle: 'Track and Improve Your Daily Habits',
            description: 'Placeholder text for the time being. Placeholder text for the time being. Placeholder text for the time being.',
            technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
            github: 'https://github.com/shawnsull3/trackit',
            photos: ['']
          }
        ]
    }
  }

  render() {
    return (
      <div className='col-12'>
        <div className='row portfolio'>
          <div className='col-12'>
            <h2>
              Portfolio
            </h2>
          </div>
          <div className='col-12'>
            <p>
              Below is a list of completed and on going projects I have developed. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio;
