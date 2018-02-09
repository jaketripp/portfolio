import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { projectList } from '../data/projectList';

export const CardList = () => {
    return (
        <div className="card-list">
            {
                projectList.map((project, i) => {
                    return (
                        <Card key={i} data={project} />
                    );
                })
            }
        </div>
    )

}

export default CardList;
