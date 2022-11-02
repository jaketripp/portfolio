import React from 'react'
import {appNames} from 'src/data/Apps'
import Card from './Card'

const CardList: React.FC = () => (
  <div className="card-list" id="work">
    {appNames.map(appName => (
      <Card key={appName} appName={appName} />
    ))}
  </div>
)

export default CardList
