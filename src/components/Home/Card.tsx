import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AppName, Apps } from 'src/data/Apps'

interface ICardProps {
  appName: AppName
}

const VISIBLE = { display: 'block' }
const HIDDEN = { display: 'none' }

const Card: React.FC<ICardProps> = ({ appName }) => {
  const app = Apps[appName]
  // put a div to block event propagation on mobile
  // otherwise, when user taps (which is "hover" on mobile),
  // it will show the buttons and potentially immediately select one
  const [blockStyle, setBlockStyle] = useState(VISIBLE)

  const restoreBlock = () => {
    setBlockStyle(VISIBLE)
  }

  const removeBlock = () => {
    setTimeout(() => {
      setBlockStyle(HIDDEN)
    }, 10)
  }

  const { color, backgroundColor } = app.style

  const btnStyle = {
    backgroundColor,
    color,
    border: `2px solid ${color}`,
    ':hover': {
      backgroundColor: color,
      color: backgroundColor,
    },
  }

  return (
    <div
      className="card"
      style={{
        color,
      }}
      onMouseUp={removeBlock}
      onMouseEnter={removeBlock}
      onMouseLeave={restoreBlock}
    >
      <Image
        src={`/images/${app.logo}`}
        alt={`${app.title} app`}
        className="image"
        layout="responsive"
        width={0}
        height={0}
        lazyBoundary="400px"
        quality={100}
      />

      <div
        className="overlay"
        style={{
          backgroundColor,
        }}
      >
        <h3>{app.title}</h3>
        <div className="text">
          <div className="block" style={blockStyle}></div>
          <a href={app.demoUrl}
            className="card__links__button"
            css={btnStyle}

          >
            Demo
          </a>

          {app.githubUrl && (
            <a href={app.githubUrl}
              className="card__links__button"
              css={btnStyle}
              key={app.githubUrl}

            >
              GitHub
            </a>
          )}
          <Link href={`/about/${appName}`} passHref>
            <a css={btnStyle} className="card__links__button">
              More Info
            </a>
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Card
