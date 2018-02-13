const apps = {
    'musicmaster': {
        title: 'Music Master',
        style: {
            color: '#ffffff',
            backgroundColor: '#2c5b61'
        },
        logo: '/images/cards/music-master.jpg',
        demoURL: 'https://jaketripp-music-master.herokuapp.com/',
        infoURLName: 'musicmaster',
        githubURL: 'https://github.com/jaketripp/music-master',
        techList: ['webpack', 'mongodb', 'firebase', 'node', 'npm', 'oauth', 'express', 'react', 'redux', 'react-router', 'es6', 'sass', 'babel', 'socketio', 'css-3', 'javascript', 'html-5', 'jest', 'momentjs', 'mailchimp', 'semantic-ui', 'bootstrap'],
        screenshot: '/images/screenshots/music-master-screenshot.png',
        description: "Sign in with your Spotify account to play popular songs by your favorite artists.",
        why: "I was initially building a more simple version of this app while following David Katz's Udemy course.",
        coolFeature: "Spotify changed their API to require authentication, so I needed to learn about OAuth and try to implement it all on my own. For my first time handling OAuth by myself, I'm very proud of the result.",
        date: 'February 2018'
    },
    'expensify': {
        title: 'Expensify',
        style: {
            color: '#ffffff',
            backgroundColor: '#1890c0'
        },
        logo: '/images/cards/expensify.jpg',
        demoURL: 'https://jaketripp-expensify.herokuapp.com/',
        infoURLName: 'expensify',
        githubURL: 'https://github.com/jaketripp/expensify',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'hairbyfrancisco': {
        title: 'Hair by Francisco',
        style: {
            color: '#ffffff',
            backgroundColor: '#7D5DB2'
        },
        logo: '/images/cards/hf.png',
        demoURL: 'http://hairbyfrancisco.com',
        infoURLName: 'hairbyfrancisco',
        githubURL: 'https://github.com/jaketripp/hairByFrancisco/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'asoftoday': {
        title: 'As of Today',
        style: {
            color: '#ffffff',
            backgroundColor: '#184860'
        },
        logo: '/images/cards/asoftoday.jpg',
        demoURL: 'http://asoftoday.me', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'sacc': {
        title: 'SA Coding Challenge',
        style: {
            color: '#ffffff',
            backgroundColor: '#181818'
        },
        logo: '/images/cards/sacc.jpg',
        demoURL: 'http://sacodingchallenge.com',
        infoURLName: 'sacc',
        githubURL: 'https://github.com/sacodingchallenge/sacodingchallenge',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'countdownchamp': {
        title: 'Countdown Champ',
        style: {
            color: '#ffffff',
            backgroundColor: '#476D36'
        },
        logo: '/images/cards/clock.jpg',
        demoURL: 'https://jaketripp-countdown-champ.herokuapp.com/',
        infoURLName: 'countdownchamp',
        githubURL: 'https://github.com/jaketripp/countdown-champ',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'chat': {
        title: 'Chat',
        style: {
            color: '#ffffff',
            backgroundColor: '#78a8d8'
        },
        logo: '/images/cards/chat.jpg',
        demoURL: 'http://jaketripp-chat-app.herokuapp.com/',
        infoURLName: 'chat',
        githubURL: 'https://github.com/jaketripp/node-chat-app',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'simon': {
        title: 'Simon Game',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#CFC977'
        },
        logo: '/images/cards/simon.png',
        demoURL: 'https://jaketripp.github.io/simon/',
        infoURLName: 'simon',
        githubURL: 'https://github.com/jaketripp/simon/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'yelpcamp': {
        title: 'YelpCamp',
        style: {
            color: '#ffffff',
            backgroundColor: '#304848'
        },
        logo: '/images/cards/yelpcamp.jpg',
        demoURL: 'https://jaketripp-yelp-camp.herokuapp.com/',
        infoURLName: 'yelpcamp',
        githubURL: 'https://github.com/jaketripp/yelpcamp',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'calculator': {
        title: 'Calculator',
        style: {
            color: '#ffffff',
            backgroundColor: '#1890d8'
        },
        logo: '/images/cards/calculator.png',
        demoURL: 'https://jaketripp.github.io/calculator/',
        infoURLName: 'calculator',
        githubURL: 'https://github.com/jaketripp/calculator/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'seasonal': {
        title: 'Seasonal',
        style: {
            color: '#ffffff',
            backgroundColor: '#F4883C'
        },
        logo: '/images/cards/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'tictactoe': {
        title: 'Tic Tac Toe',
        style: {
            color: '#ffffff',
            backgroundColor: '#00A717'
        },
        logo: '/images/cards/tictactoe.png',
        demoURL: 'https://jaketripp.github.io/tictactoe/',
        infoURLName: 'tictactoe',
        githubURL: 'https://github.com/jaketripp/tictactoe/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'colorconversion': {
        title: 'Color Conversion',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#a81890'
        },
        logo: '/images/cards/color.jpg',
        demoURL: 'https://jaketripp.github.io/Color-Conversion/',
        infoURLName: 'colorconversion',
        githubURL: 'https://github.com/jaketripp/Color-Conversion/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'piglatinconverter': {
        title: 'Pig Latin Converter',
        style: {
            color: '#ffffff',
            backgroundColor: '#f0a890'
        },
        logo: '/images/cards/pig.jpg',
        demoURL: 'https://jaketripp.github.io/PigLatinConverter/',
        infoURLName: 'piglatinconverter',
        githubURL: 'https://github.com/jaketripp/PigLatinConverter',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'wikiviewer': {
        title: 'Wiki Viewer',
        style: {
            color: '#ffffff',
            backgroundColor: '#f07818'
        },
        logo: '/images/cards/wikiviewer.png',
        demoURL: 'https://jaketripp.github.io/wikiviewer/',
        infoURLName: 'wikiviewer',
        githubURL: 'https://github.com/jaketripp/wikiviewer/',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'kokolunchbox': {
        title: 'Koko Lunchbox',
        style: {
            color: '#ffffff',
            backgroundColor: '#c00030'
        },
        logo: '/images/cards/koko.png',
        demoURL: 'https://jaketripp.github.io/Koko-Lunchbox/',
        infoURLName: 'kokolunchbox',
        githubURL: 'https://github.com/jaketripp/Koko-Lunchbox',
        techList: [],
        screenshot: '',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    }
};

module.exports = { apps };

// chat
// include this on page
// <a href="https://www.freepik.com/free-vector/chat-speech-bubble-icon_761194.htm">Designed by Freepik</a>