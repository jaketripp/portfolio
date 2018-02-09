import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const projects = [
    {
        backgroundColor: '#184860',
        color: '#ffffff',
        title: 'As of Today',
        logo: 'http://jaketripp.com/images/asoftoday.jpg',
        demoURL: 'http://asoftoday.com', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
    },
    {
        backgroundColor: '#F4883C',
        color: '#ffffff',
        title: 'Seasonal',
        logo: 'http://jaketripp.com/images/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
    },
    {
        backgroundColor: '#184860',
        color: '#ffffff',
        title: 'As of Today',
        logo: 'http://jaketripp.com/images/asoftoday.jpg',
        demoURL: 'http://asoftoday.com', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
    },
    {
        backgroundColor: '#F4883C',
        color: '#ffffff',
        title: 'Seasonal',
        logo: 'http://jaketripp.com/images/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
    },
    {
        backgroundColor: '#184860',
        color: '#ffffff',
        title: 'As of Today',
        logo: 'http://jaketripp.com/images/asoftoday.jpg',
        demoURL: 'http://asoftoday.com', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
    },
    {
        backgroundColor: '#F4883C',
        color: '#ffffff',
        title: 'Seasonal',
        logo: 'http://jaketripp.com/images/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
    },
    {
        backgroundColor: '#184860',
        color: '#ffffff',
        title: 'As of Today',
        logo: 'http://jaketripp.com/images/asoftoday.jpg',
        demoURL: 'http://asoftoday.com', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
    },
    {
        backgroundColor: '#F4883C',
        color: '#ffffff',
        title: 'Seasonal',
        logo: 'http://jaketripp.com/images/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
    },
    {
        backgroundColor: '#184860',
        color: '#ffffff',
        title: 'As of Today',
        logo: 'http://jaketripp.com/images/asoftoday.jpg',
        demoURL: 'http://asoftoday.com', // 'https://jaketripp.com/apps/asoftoday'
        infoURLName: 'asoftoday',
        githubURL: 'https://github.com/jaketripp/asoftoday',
    },
    {
        backgroundColor: '#F4883C',
        color: '#ffffff',
        title: 'Seasonal',
        logo: 'http://jaketripp.com/images/seasonal.jpg',
        demoURL: 'https://jaketripp.github.io/Seasonal',
        infoURLName: 'seasonal',
        githubURL: 'https://github.com/jaketripp/Seasonal',
    }
];

export const CardList = () => {
    return (
        <div className="card-list">
            {
                projects.map((project, i) => {
                    return (
                        <Card key={i} data={project} />
                    );
                })
            }
        </div>
    )

}

export default CardList;
