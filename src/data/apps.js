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
        techList: ['react', 'node', 'webpack', 'express', 'es6', 'oauth', 'babel', 'sass', 'bootstrap'],
        screenshot: '/images/screenshots/musicmaster.png',
        description: "Sign in with your Spotify account to play popular songs by your favorite artists.",
        why: "I was initially building a more simple version of this app while following David Katz's Udemy course. I love music and I am a Spotify user and it seemed like a good project to learn more about React.",
        coolFeature: "When David Katz made his course, Spotify didn't require authentication for their API. Then, Spotify changed their API to require authentication, so I needed to learn about OAuth and try to implement it all on my own. For my first time handling OAuth by myself, I'm very proud of the result.",
        date: 'January 2018'
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
        techList: ['react', 'redux', 'react-router', 'node', 'webpack', 'jest', 'express', 'es6', 'firebase', 'babel', 'sass'],
        screenshot: '/images/screenshots/expensify.jpg',
        description: "Keep track of your expenses with this powerful and intuitive app!",
        why: "I made the bulk of this app as the capstone project of Andrew Mead's Udemy course. It used all of the things we learned in the course, and then I added some features of my own.",
        coolFeature: "As a user, I really enjoy when I can sign up for something using another account, so I went ahead and leveraged Firebase to handle the authentication for Google, Facebook, Twitter, and GitHub. I also added a confirmation modal for when the user tries to delete an expense. Finally, I added the user's picture and name, which I think brings the user a sense of familiarity and belonging.",
        date: 'December 2017'
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
        techList: ['html-5', 'css-3', 'javascript', 'jquery', 'semantic-ui'],
        screenshot: '/images/screenshots/hairbyfrancisco.jpg',
        description: "Francisco Mejia is a passionate, local hairstylist. Clients of Francisco love his creative vision, his ability to give people the perfect haircut/style/color, his attention to detail, and his friendly personality.",
        why: "Francisco is my barber and his website didn't show off his skills very well. I also wanted to add real work to my résumé.",
        coolFeature: "I wanted people to really get a sense of Francisco's work and skills, so I knew I would need a lot of pictures. However, with all of those pictures the page started loading really slow. I opted for a cool solution: progressive loading. Basically, load in extremely tiny sized versions of the pictures and have a blur effect, and as the user scrolls, dynamically load in the real image and remove the blur effect. Quick to load and an enjoyable experience.",
        date: 'October 2017'
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
        screenshot: '/images/screenshots/asoftoday.png',
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
        screenshot: '/images/screenshots/sacc.png',
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
        screenshot: '/images/screenshots/countdownchamp.png',
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
        screenshot: '/images/screenshots/chat.png',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'simon': {
        title: 'Simon Game',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#DB2828'
        },
        logo: '/images/cards/simon.png',
        demoURL: 'https://jaketripp.github.io/simon/',
        infoURLName: 'simon',
        githubURL: 'https://github.com/jaketripp/simon/',
        techList: [],
        screenshot: '/images/screenshots/simon.png',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'yelpcamp': {
        title: 'YelpCamp',
        style: {
            color: '#ffffff',
            backgroundColor: '#265a88'
        },
        logo: '/images/cards/yelpcamp.jpg',
        demoURL: 'https://jaketripp-yelp-camp.herokuapp.com/',
        infoURLName: 'yelpcamp',
        githubURL: 'https://github.com/jaketripp/yelpcamp',
        techList: [],
        screenshot: '/images/screenshots/yelpcamp.png',
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
        screenshot: '/images/screenshots/calculator.png',
        description: '',
        why: '',
        coolFeature: '',
        date: ''
    },
    'seasonal': {
        title: 'Seasonal',
        style: {
            color: '#ffffff',
            backgroundColor: '#D4493D'
        },
        logo: '/images/cards/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
        techList: [],
        screenshot: '/images/screenshots/seasonal.png',
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
        screenshot: '/images/screenshots/tictactoe.png',
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
        screenshot: '/images/screenshots/colorconversion.png',
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
        screenshot: '/images/screenshots/piglatinconverter.png',
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
        screenshot: '/images/screenshots/wikiviewer.png',
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
        screenshot: '/images/screenshots/kokolunchbox.png',
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