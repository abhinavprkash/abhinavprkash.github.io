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

  const githubData = {}
  const repos = items
    .flatMap(item => item.projects)
    .filter(project => project.github)

  await Promise.all(
    repos.map(async project => {
      try {
        const res = await fetch(
          `https://api.github.com/repos/${project.github}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }
        )
        if (res.ok) {
          const data = await res.json()
          githubData[project.github] = {
            stars: data.stargazers_count,
            language: data.language,
            description: data.description,
          }
        }
      } catch (e) {
        // Gracefully skip if GitHub API is unavailable
      }
    })
  )

  return { props: { ...meta, githubData } }
}

function Hackathons(props) {
  const { githubData = {} } = props

  const renderFeatured = () => {
    const featured = ['MetaPitch', 'ragebAIt', 'ThreadPilot']

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => item.length > 0)
      .flat()
      .map((item, index) => {
        const gh = item.github && githubData[item.github]
        const statsParts = []
        if (gh && gh.language) statsParts.push(gh.language)
        if (gh && gh.stars) statsParts.push(`⭐ ${gh.stars}`)
        const project = statsParts.length > 0
          ? { ...item, stats: statsParts.join(' · ') }
          : item
        return <FeaturedProject key={index} project={project} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              const gh = project.github && githubData[project.github]
              return <HackathonItem key={pIndex} project={project} gh={gh} />
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
  const { project, gh } = props

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
      {project.event && <span> — {project.event}</span>}
      {gh && gh.language && <span> · {gh.language}</span>}
      {gh && gh.stars > 0 && <span> · ⭐ {gh.stars}</span>}
    </li>
  )
}

Hackathons.Layout = Base

export default Hackathons
