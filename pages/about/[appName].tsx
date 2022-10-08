import {GetServerSideProps, NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import {AppName, appNames, Apps} from 'src/data/Apps'
import hexRgb from 'hex-rgb'
import {Tech} from 'src/data/Tech'

export const getServerSideProps: GetServerSideProps<
  IAppInfoPageProps
> = async context => {
  const appName = context.query.appName as AppName
  if (appName in Apps) {
    return {
      props: {
        appName,
      },
    }
  } else {
    return {
      redirect: {
        statusCode: 302,
        destination: '/404',
      },
    }
  }
}

const getPrevAndNext = (appName: AppName) => {
  const i = appNames.findIndex(project => project === appName)
  return {
    nextAppName: appNames[i + 1] ?? appNames[0],
    prevAppName: appNames[i - 1] ?? appNames[appNames.length - 1],
  }
}

export interface IAppInfoPageProps {
  appName: AppName
}

const AppInfoPage: NextPage<IAppInfoPageProps> = ({appName}) => {
  const appDetails = Apps[appName]
  const {prevAppName, nextAppName} = getPrevAndNext(appName)

  const {color, backgroundColor} = appDetails.style
  const btnStyle = {
    backgroundColor: color,
    color: backgroundColor,
    border: `2px solid ${backgroundColor}`,
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',

    ':hover': {
      backgroundColor,
      color,
      boxShadow: `0px 15px 20px ${hexRgb(backgroundColor, {
        alpha: 0.3,
        format: 'css',
      })}`,
    },
  }
  return (
    <div className="app-info">
      <div className="content-container">
        <h1 style={{color: backgroundColor}}>{appDetails.title}</h1>
        <div className="content">
          <div className="screenshot">
            <Image
              key={appDetails.title}
              src={appDetails.screenshot}
              alt={`${appDetails.title} screenshot`}
              layout="responsive"
              priority
              quality={100}
            />
            <a href={appDetails.demoUrl}>
              <div className="gradient" />
            </a>
          </div>
          <div className="text">
            <div className="buttons">
              <a
                className="card__links__button"
                css={btnStyle}
                href={appDetails.demoUrl}
              >
                Demo
              </a>
              {appDetails.githubUrl && (
                <a
                  className="card__links__button"
                  css={btnStyle}
                  href={appDetails.githubUrl}
                >
                  GitHub
                </a>
              )}
            </div>
            <div className="app-info__description">
              <p>
                <strong>Description: </strong>
                {appDetails.description}
              </p>
            </div>
            <div>
              <p>
                <strong>
                  Why I made <em>{appDetails.title}</em>:{' '}
                </strong>
                {appDetails.why}
              </p>
            </div>
            <div>
              <p>
                <strong>What I'm proud of: </strong>
                {appDetails.coolFeature}
              </p>
            </div>
            <div>
              <p>
                <strong>Date: </strong>
                {appDetails.dateCompleted}
              </p>
              <p id="tech-p">
                <strong>Tech: </strong>
              </p>
            </div>
            <div className="app-info__technologies">
              {appDetails.technologies.map((techName, i) => {
                const tech = Tech[techName]
                return (
                  <img
                    key={i}
                    src={tech.logo}
                    alt={`${tech.humanName} logo`}
                    title={`${tech.humanName}`}
                    id={techName}
                    className="tech-icon"
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className="nextOrPrev">
          <Link href={`/about/${prevAppName}`} passHref>
            <a className="prev">
              <MdKeyboardArrowLeft />
              <span>Previous</span>
            </a>
          </Link>
          <Link href={`/about/${nextAppName}`} passHref>
            <a className="next">
              <span>Next</span>
              <MdKeyboardArrowRight />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AppInfoPage
