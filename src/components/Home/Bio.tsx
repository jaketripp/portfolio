import Image from 'next/image'
import React from 'react'
import profilePic from "images/jaketripp.jpg"

const Bio: React.FC = () => (
  <div className="bio section">
    <div className="content-container">
      <div className="bio__content">
        <div className="bio__image">
          <Image src={profilePic} alt="Me (Jake Tripp)" priority />
        </div>
        <div className="bio__jumbo">
          <h2>FULL.</h2>
          <h2>STACK.</h2>
          <h2>DEVELOPER.</h2>
        </div>
      </div>
    </div>
  </div>
)

export default Bio
