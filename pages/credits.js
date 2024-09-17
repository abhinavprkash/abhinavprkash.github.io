import Head from 'next/head'
import React from 'react'
import Base from '../layouts/Base'
import credits from '../data/credits'

export async function getStaticProps() {
  const meta = {
    title: 'Credits // Parth Desai',
    description:
      "It's important to recognize those who volunteer their time and resources to create amazing content and make it available for free.",
    tagline: 'Credits.',
    image: '/static/images/credits-bw.jpg',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function Credits(props) {
  const { title, description, image } = props

  const renderCredits = () => {
    return credits.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h2>{item.person}</h2>
          <span dangerouslySetInnerHTML={{ __html: item.description }} />
        </div>
      )
    })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://abhinavprakash.me/credits" property="og:url" />
        <meta content={`https://abhinavprakash.me${image}`} property="og:image" />
      </Head>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <hr style={{ border: '0.5px solid white', margin: '20px 0' }} />
      {renderCredits()}
    </>
  )
}

Credits.Layout = Base

export default Credits
