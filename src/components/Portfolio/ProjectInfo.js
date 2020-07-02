import seedspot from './ProjectPictures/seedspot.png';
import seedspot2 from './ProjectPictures/seedspot2.png';
import reportCardExample from './ProjectPictures/reportCardExample.png';

import metrics from './ProjectPictures/trackit-metrics.png';
import trackit from './ProjectPictures/trackit.png';

const projects = [
    {
        title: 'SeedSpot',
        subtitle: 'Find Quality Investors for Your Startup',
        overview: 'PLace holder text. Place holder Text. Place Holder Text',
        description: [],
        technologies: ['React', 'Node.js', 'AirTable', `Twilio's SendGrid`],
        githubLink: 'https://github.com/shawnsull3/seedspot',
        photos: [seedspot, seedspot2, reportCardExample],
        url: 'https://www.linkedin.com/in/shawnsull3/',
    },
    {
        title: 'trackIt',
        subtitle: 'Track and Improve Your Daily Habits',
        overview: 'PLace holder text. Place holder Text. Place Holder Text',
        description: [],
        technologies: ['React Native', 'Node.js', 'Express', 'MongoDB'],
        githubLink: 'https://github.com/shawnsull3/trackit',
        photos: [metrics, trackit],
        url: 'https://www.linkedin.com/in/shawnsull3/',
    }
];

export default projects;