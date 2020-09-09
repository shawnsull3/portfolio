import seedspot1 from './ProjectPictures/seedspot1.png';
import seedspot2 from './ProjectPictures/seedspot2.png';
import seedspot3 from './ProjectPictures/seedspot3.png';
import seedspot4 from './ProjectPictures/seedspot4.png';
import seedspot5 from './ProjectPictures/seedspot5.png';

import metrics from './ProjectPictures/trackit-metrics.png';
import trackit from './ProjectPictures/trackit.png';

import bluelagoons1 from './ProjectPictures/bluelagoons1.png';

import tigereye1 from './ProjectPictures/tigereye1.png';
import tigereye2 from './ProjectPictures/tigereye2.png';

const projects = [
    {
        title: 'VC Rank',
        subtitle: 'Find Quality Investors for Your Startup',
        overview: 'A web application for New Stack Ventures that provides founders with a list of venture firms for their next fundraise.',
        technologies: ['React', 'Node.js', 'AirTable', `Twilio's SendGrid`, 'Bootstrap', 'CSS', 'Express'],
        githubLink: 'https://github.com/shawnsull3/seedspot',
        photos: [seedspot1, seedspot2, seedspot3, seedspot4, seedspot5],
        url: 'https://www.vc-rank.com/',
        noURL: 'In development',
        description: [
            `The application collects relevant information about the founder’s company and matches them with ideal fits for their business given their company’s niche.`,
            `The investor list is emailed to the user via Twilio’s Sendgrid API.`,
            `Developed and tested full-stack functionality to allow asynchronous data loading and transfer using React and Node.js`,
            `Designed attractive and responsive UI to fit New Stack & The Full Ratchet’s branding`,
        ],
    },
    {
        title: `Tiger Eye`,
        subtitle: 'Fashion & Fury',
        overview: `Responsive retail web application for customers to browse, review and purchase products`,
        technologies: ['React', 'Node.js', 'Redux', 'Bootstrap', 'CircleCI', 'SASS', 'Axios'],
        githubLink: 'https://github.com/shawnsull3/tiger-eye',
        photos: [tigereye1, tigereye2],
        url: '',
        noURL: 'No longer deployed due to AWS costs',
        description: [
            `Designed and implemented UI & UX for Product Overview component`,
            `Utilized Agile development, Trello, and CircleCI to streamline team workflow`,
            `Allow users to enlarge images and magnification on the cursor for closer inspection`,
        ],
    },
    {
        title: 'trackIt',
        subtitle: 'Track and Improve Your Daily Habits',
        overview: `An app that allows users to track various aspects of their life from day to day, so they can improve themselves in whatever category that may be.`,
        technologies: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'D3.js'],
        githubLink: 'https://github.com/shawnsull3/trackit',
        photos: [metrics, trackit],
        url: '',
        noURL: 'In development',
        description: [
            `React Native SVG Charts & D3.js generate charts for better readability and analysis of user’s habits.`,
            `Intuitive UI/UX with FlexBox and React Native Navigation.`,
        ],
    },
    {
        title: `Blue Lagoons`,
        subtitle: `Backend System for Tiger Eye's Questions & Answers`,
        overview: `Replaced, deployed, benchmarked, and optimized a legacy backend system for Tiger Eye, an Ecommerce retail website.`,
        technologies: ['Node.js', 'Express', 'PostgreSQL', 'AWS', 'K6'],
        githubLink: 'https://github.com/blue-lagoons/questions-and-answers-be',
        photos: [bluelagoons1, 'https://github.com/blue-lagoons/questions-and-answers-be/raw/master/images/response_time_30s.png', 'https://github.com/blue-lagoons/questions-and-answers-be/raw/master/images/RPS_vs_VUs_30s.png', 'https://github.com/blue-lagoons/questions-and-answers-be/raw/master/images/table.png', 'https://github.com/blue-lagoons/questions-and-answers-be/raw/master/images/deployed.png'],
        url: '',
        noURL: 'No longer deployed due to AWS costs',
        description: [
            `Preserved legacy data and integrated it into the new PostgrSQL database.`,
            `RESTful API routes were created for the server to interact with the SQL database.`,
            `Deployed server and database on EC2 instances through AWS.`,
            `Generated 10 Million questions to stress test the system locally and in production.`,
            'The deployed backend could handle approximately 730 RPS, with an average http reponse time of 122 ms, and 0% error rate',
            'Detailed stress test results & summary can be found under Github Repo README.'
        ]
    },
];

export default projects;
