import React from 'react'

const About: React.FC = () => (
  <div className="section section__secondary" id="about">
    <div className="content-container">
      <h3>about</h3>
      <div className="about__content">
        <p>
          I love to understand the way things work—everything, from simple
          kitchen gadgets to complex calculus equations. Understanding helps
          equip me to create. And{' '}
          <strong>
            I <em>love</em> to create.
          </strong>
        </p>
        <p>
          When I'm not clickin' away at my keyboard, you'll find me playing
          music, cooking, or going for a walk.
        </p>
        <p>
          I live in Seattle and work remotely at{' '}
          <a href="https://mercury.com/" target="_blank">
            Mercury
          </a>
          , which was recently ranked as the{' '}
          <a
            href="https://www.greatplacetowork.com/best-workplaces/technology/2022?category=small-and-medium"
            target="_blank"
          >
            #18 best place to work in Technology (small and medium sized
            companies)
          </a>
          .
        </p>
      </div>
    </div>
  </div>
)
export default About
