export type TechName =
  | 'webpack'
  | 'mongodb'
  | 'firebase'
  | 'node'
  | 'oauth'
  | 'express'
  | 'react'
  | 'redux'
  | 'react_router'
  | 'es6'
  | 'sass'
  | 'babel'
  | 'socketio'
  | 'css_3'
  | 'javascript'
  | 'html_5'
  | 'jest'
  | 'momentjs'
  | 'mailchimp'
  | 'semantic_ui'
  | 'bootstrap'
  | 'jquery'
  | 'modernizr'
  | 'passport'
  | 'mocha'
  | 'chai'
  | 'selenium'
  | 'material_ui'

export interface TechDetails {
  logo: string
  humanName: string
}

export const Tech: Record<TechName, TechDetails> = {
  webpack: {
    logo: '/images/tech/webpack.svg',
    humanName: 'Webpack',
  },
  mongodb: {
    logo: '/images/tech/mongodb.svg',
    humanName: 'MongoDB',
  },
  firebase: {
    logo: '/images/tech/firebase.svg',
    humanName: 'Firebase',
  },
  node: {
    logo: '/images/tech/node.svg',
    humanName: 'Node.js',
  },
  oauth: {
    logo: '/images/tech/oauth.svg',
    humanName: 'OAuth',
  },
  express: {
    logo: '/images/tech/express.svg',
    humanName: 'Express',
  },
  react: {
    logo: '/images/tech/react.svg',
    humanName: 'React',
  },
  redux: {
    logo: '/images/tech/redux.svg',
    humanName: 'Redux',
  },
  react_router: {
    logo: '/images/tech/react-router.svg',
    humanName: 'React Router',
  },
  es6: {
    logo: '/images/tech/es6.svg',
    humanName: 'ES6',
  },
  sass: {
    logo: '/images/tech/sass.svg',
    humanName: 'Sass',
  },
  babel: {
    logo: '/images/tech/babel.svg',
    humanName: 'Babel',
  },
  socketio: {
    logo: '/images/tech/socketio.svg',
    humanName: 'Socket.IO',
  },
  css_3: {
    logo: '/images/tech/css-3.svg',
    humanName: 'CSS3',
  },
  javascript: {
    logo: '/images/tech/javascript.svg',
    humanName: 'JavaScript',
  },
  html_5: {
    logo: '/images/tech/html-5.svg',
    humanName: 'HTML5',
  },
  jest: {
    logo: '/images/tech/jest.svg',
    humanName: 'Jest',
  },
  momentjs: {
    logo: '/images/tech/momentjs.svg',
    humanName: 'Moment.js',
  },
  mailchimp: {
    logo: '/images/tech/mailchimp.svg',
    humanName: 'MailChimp',
  },
  semantic_ui: {
    logo: '/images/tech/semantic-ui.svg',
    humanName: 'Semantic UI',
  },
  bootstrap: {
    logo: '/images/tech/bootstrap.svg',
    humanName: 'Bootstrap',
  },
  jquery: {
    logo: '/images/tech/jquery.svg',
    humanName: 'jQuery',
  },
  modernizr: {
    logo: '/images/tech/modernizr.svg',
    humanName: 'Modernizr',
  },
  passport: {
    logo: '/images/tech/passport.svg',
    humanName: 'Passport.js',
  },
  mocha: {
    logo: '/images/tech/mocha.svg',
    humanName: 'Mocha',
  },
  chai: {
    logo: '/images/tech/chai.svg',
    humanName: 'Chai',
  },
  selenium: {
    logo: '/images/tech/selenium.svg',
    humanName: 'Selenium',
  },
  material_ui: {
    logo: '/images/tech/material-ui.svg',
    humanName: 'Material-UI',
  },
}
