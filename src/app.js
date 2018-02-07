import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';

const jsx = (
  <AppRouter />
);


ReactDOM.render(jsx, document.getElementById('app'));
