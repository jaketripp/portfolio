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
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
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
        demoURL: 'http://asoftoday.me',
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery', 'modernizr'],
        screenshot: '/images/screenshots/asoftoday.png',
        description: "As of Today provides a helpful way to track the statistics of a life after habitual addiction.",
        why: "My mom was addicted to Diet Coke for most of her adult life. She tried multiple times to quit - all unsuccessful. She usually drank six Diet Cokes a day. Partly with the help of As of Today, she successfully quit on February 23, 2017. That's a lot of Diet Cokes! Now, she has lower cholesterol and blood pressure, healthier body weight and dental hygiene, more balanced emotional health, and less pain. I want that for everyone.",
        coolFeature: "When I made As of Today, I was new to databases. And I also wanted to respect people's privacy, because addiction is a very personal thing. So I opted to use localStorage to store some simple info in the user's browser and have the site update on refresh.",
        date: 'July 2017'
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
        techList: ['node', 'express', 'momentjs', 'html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: '/images/screenshots/sacc.png',
        description: "The San Antonio Coding Challenge is a meetup group that holds a monthly coding competition in San Antonio.",
        why: "Gene Carangal, the founder of the meetup, is a really great guy and I really enjoy attending this meetup. Gene noticed that I was looking for work to boost my résumé, and the website needed a lot of work, and the rest is history.",
        coolFeature: "This was one of my first Node.js apps where I did almost everything entirely on my own, which was a big milestone for me. I also chose to use EJS templating, which really helped cut the time for development.",
        date: "October 2017"
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
        techList: ['react', 'node', 'webpack', 'es6', 'babel', 'css-3', 'bootstrap'],
        screenshot: '/images/screenshots/countdownchamp.png',
        description: "Type in a date and Countdown Champ will tell you the time until.",
        why: "I built this app while following David Katz's Udemy course. I actually built a very similar, simple countdown app for my brother who was getting married, but this is a definite step up.",
        coolFeature: "By using a combination of React with JavaScript's setInterval function, the app counts down the seconds and updates seamlessly when you enter a new date.",
        date: "January 2018"
    },
    'chat': {
        title: 'Chat',
        style: {
            color: '#ffffff',
            backgroundColor: '#276b82'
        },
        logo: '/images/cards/chat.jpg',
        demoURL: 'http://jaketripp-chat-app.herokuapp.com/',
        infoURLName: 'chat',
        githubURL: 'https://github.com/jaketripp/node-chat-app',
        techList: ['node', 'express', 'momentjs', 'socketio', 'html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: '/images/screenshots/chat.png',
        description: "Pick a username, pick a chatroom from a list (or create your own), and tell your friends to join!",
        why: "I built this app while following Andrew Mead's Udemy course on Node.js.",
        coolFeature: "I added the feature of being able to see a list of currently open chatrooms. This was also my first project using web sockets with Socket.IO.",
        date: "November 2017"
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
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: '/images/screenshots/simon.png',
        description: "Just like the old Simon game from your childhood. Get through round 20 for a nostalgic sound effect.",
        why: "This was the last project from freeCodeCamp's Advanced Front End Development Projects. I remember playing this game as a kid, and it seemed like a good challenge.",
        coolFeature: "I picked a really simple layout, I found soothing sound effects instead of monotonous beep sounds, and I put a subtle CSS animation on the tile that is active. I also had to get more familiar with HTML audio elements to get the behavior I wanted.",
        date: "August 2017"
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
        techList: ['node', 'mongodb', 'express', 'passport', 'html-5', 'css-3', 'javascript', 'bootstrap'],
        screenshot: '/images/screenshots/yelpcamp.png',
        description: "View hand-picked campgrounds from all over the world! Sign up to add your own campgrounds or leave comments on other campgrounds.",
        why: "I built this app while following Colt Steele's Web Dev Bootcamp Udemy course. This was the final and most complex project of the course.",
        coolFeature: "This was my first exposure to authentication (in this instance using Passport.js). At the time, this was also the most advanced work I'd done with databases (in this instance, MongoDB).",
        date: "May 2017"
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
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: '/images/screenshots/calculator.png',
        description: "Four function calculator.",
        why: "This was a project from freeCodeCamp's Advanced Front End Development Projects. I'm a huge math geek, and it seemed like a great introductory challenge for getting accustomed to working with state.",
        coolFeature: "I created this project before I knew anything about React. Maintaining the state of what the user is seeing and the state of the calculations and keeping them separate and updated proved quite challenging. I carefully created the user interface based on memories of four function calculators from my childhood (just look at that font!).",
        date: "September 2017"
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
        techList: ['html-5', 'css-3', 'javascript', 'bootstrap', 'jquery'],
        screenshot: '/images/screenshots/seasonal.png',
        description: "A comprehensive tool to aid with picking out fresh fruit. Seasonal is one of my very first projects, and it was the first project where I used Git and GitHub. I researched all of the information myself. ",
        why: "I was really fed up with two things: 1) going to the grocery store and only picking the fruit I was familiar with and 2) not knowing whether fruit was ripe or not.",
        coolFeature: "Seasonal tells you what fruit is in season based on the month, what signs to look for that signify ripeness, the health benefits of the fruit (with links), and more! ",
        date: "Jan 2017"
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
        techList: ['html-5', 'css-3', 'javascript', 'semantic-ui', 'jquery'],
        screenshot: '/images/screenshots/tictactoe.png',
        description: "Play Tic Tac Toe against a formidable opponent.",
        why: "This was a project from freeCodeCamp's Advanced Front End Development Projects. Tic tac toe is a simple game, and so I wanted to see if writing a bot was equally simple. It was not.",
        coolFeature: "I had to think very algorithmically. I had to maintain state so that the bot would know which move is probably a good one. I ranked the best moves. At the time, I tried to implement the infamous minimax algorithm but it proved too complex for me, although I may take a stab at it at a later date. While not unbeatable, my bot has beat most people I've shown it to.",
        date: "September 2017"
    },
    'colorconversion': {
        title: 'Color Conversion',
        style: {
            color: '#FFFFFF',
            backgroundColor: '#A81890'
        },
        logo: '/images/cards/color.jpg',
        demoURL: 'https://jaketripp.github.io/Color-Conversion/',
        infoURLName: 'colorconversion',
        githubURL: 'https://github.com/jaketripp/Color-Conversion/',
        techList: [],
        screenshot: '/images/screenshots/colorconversion.png',
        description: "",
        why: "",
        coolFeature: "",
        date: ""
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
        description: "",
        why: "",
        coolFeature: "",
        date: ""
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
        description: "",
        why: "",
        coolFeature: "",
        date: ""
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
        description: "",
        why: "",
        coolFeature: "",
        date: ""
    }
};

module.exports = { apps };