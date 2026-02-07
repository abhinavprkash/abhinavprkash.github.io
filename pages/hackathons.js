import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import FeaturedProject from '../components/FeaturedProject'
import { FeaturedProjects } from '../components/FeaturedProjects'
import items from '../data/hackathons'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Hackathons // Abhinav Prakash',
    tagline: 'Hack. Build. Innovate.',
    image: '/static/images/projects-bw.jpg',
    primaryColor: 'yellow',
    secondaryColor: 'pink',
  }

  return { props: meta }
}

function Hackathons(props) {
  const renderFeatured = () => {
    const featured = ['MetaPitch', 'ragebAIt', 'ThreadPilot']

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => item.length > 0)
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <HackathonItem key={pIndex} project={project} />
            })}
          </ul>
        </div>
      )
    })
  }

  const getTotalProjects = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length
    }

    return total
  }

  const { title, image } = props
  const description = `I love participating in <strong>hackathons</strong>. Here you can navigate to all <strong>${getTotalProjects()} hackathon projects</strong> that I have built.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://abhinavprakash.me/hackathons" property="og:url" />
        <meta content={`https://abhinavprakash.me${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        <h2>All Hackathon Projects</h2>
        {renderAll()}
      </AnimateSharedLayout>
    </>
  )
}

function HackathonItem(props) {
  const { project } = props

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
      {project.event && <span> — {project.event}</span>}
    </li>
  )
}

Hackathons.Layout = Base

export default Hackathons
