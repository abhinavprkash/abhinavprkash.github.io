import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { ListGroup } from '../components/ListGroup'
import ListItem from '../components/ListItem'
import { appearances, bytework, zofe } from '../data/podcasts'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Podcasts // Parth Desai',
    tagline: 'Ideas. Thoughts. Opinions.',
    image: '/static/images/podcasts-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: { ...meta }, revalidate: 60 }
}

function Podcasts(props) {
  const renderFeatured = items => {
    const featured = [
      'Getting to Glassdoor on The Changelog',
      'Why developers trust Glassdoor on Scaling DevTools',
      'React.Email, Glassdoor, Dracula Theme on DevTools.fm',
    ]

    return items
      .filter(item => featured.includes(item.title))
      .map((item, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            href={item.url}
            title={item.title}
            date={item.date}
          />
        )
      })
  }

  const renderEpisode = items => {
    return items.map((item, index) => {
      return (
        <ListItem
          key={index}
          index={index}
          href={item.url}
          title={item.title}
          date={item.date}
        />
      )
    })
  }

  const { title, image } = props
  const description = `Audio is a powerful medium and a great way to <strong>debate ideas</strong>. Whenever possible I try to share my story as a guest or <strong>meet new people</strong> by hosting my own podcast called ByteWork.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://abhinavprakash.me/podcasts" property="og:url" />
        <meta content={`https://abhinavprakash.me${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Podcasts</h2>
        <ListGroup>{renderFeatured(appearances)}</ListGroup>

        <h2>ByteWork</h2>
        <p>
          A podcast where Jonni and I interview the most productive people in
          tech.
        </p>
        <ListGroup>{renderEpisode(bytework)}</ListGroup>

        <h2>Appearances</h2>
        <p>
          This is the list of all the podcasts that I gave an interview so far.
        </p>
        <ListGroup>{renderEpisode(appearances)}</ListGroup>

        <h2>Zone Of Front-Enders</h2>
        <p>
          My first podcast, ZOFE, where Daniel and I worked about web
          technologies.
        </p>
        <ListGroup>{renderEpisode(zofe)}</ListGroup>
      </AnimateSharedLayout>
    </>
  )
}

Podcasts.Layout = Base

export default Podcasts
