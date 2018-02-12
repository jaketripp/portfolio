import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { apps } from '../data/apps';

export const CardList = () => {
    return (
        <div className="card-list">
            {
                Object.keys(apps).map((project, i) => {
                    return (
                        <Card key={i} data={apps[project]} />
                    );
                })
            }
        </div>
    )

}

export default CardList;
