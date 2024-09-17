import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'
import { styled } from '../stitches.config'  // Assuming you are using `stitches.config`

// Your articles data with Medium links
export async function getStaticProps() {
  const featuredPosts = [
    {
      slug: 'how-to-prepare-for-job-placement-as-an-indian-student',
      title: 'How to Prepare for Job Placement as an Indian Student and Not Cry Yourself to Sleep Every Night',
      description: 'A guide to help Indian students prepare for job placements with minimal stress...',
      content: 'A complete guide on preparing for job placement as an Indian student...',
      stats: '',
      link: 'https://medium.com/@yourusername/how-to-prepare-for-job-placement-as-an-indian-student-aa5050443c7',
    },
    {
      slug: 'mastering-binary-search',
      title: 'Mastering Binary Search: The Art of Efficient Searching and Problem Solving',
      description: 'In-depth insights into binary search, its uses, and problem-solving techniques...',
      content: 'This post dives deep into binary search and its importance...',
      stats: '',
      link: 'https://medium.com/@yourusername/mastering-binary-search-49e0d5034a1d',
    },
    {
      slug: 'a-cinematic-journey-through-binary-trees',
      title: 'A Cinematic Journey Through Binary Trees',
      description: 'An engaging and creative approach to understanding binary trees...',
      content: 'This post presents binary trees in a cinematic storytelling format...',
      stats: '',
      link: 'https://medium.com/@yourusername/a-cinematic-journey-through-binary-trees-74f993eece1c',
    },
    {
      slug: 'mastering-dynamic-programming',
      title: 'Mastering Dynamic Programming: A Fun and “Deep” Journey 🚀',
      description: 'A comprehensive guide to mastering dynamic programming...',
      content: 'In a world where coding competitions and technical interviews are the ultimate battlegrounds...',
      stats: '',
      link: 'https://compilex.medium.com/mastering-dynamic-programming-a-fun-and-deep-journey-e2128504bbd3',
    }
  ]

  return {
    props: {
      title: 'Articles // Abhinav Prakash',
      tagline: 'Stories. Experiences. Musings.',
      featuredPosts,
    },
  }
}

function Articles(props) {
  const renderFeatured = () => {
    return props.featuredPosts.map((post, index) => (
      <FeaturedArticleTile key={index}>
        <h3>
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            {post.title}
          </a>
        </h3>
        <p>{post.description}</p>
        <small>{post.stats}</small>
      </FeaturedArticleTile>
    ))
  }

  const { title } = props
  const description = `Here you can find <strong>${props.featuredPosts.length} featured articles</strong> that I've written. My writing primarily covers topics related to technology, algorithms, and personal experiences.`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://abhinavprakash.com/articles" property="og:url" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2 style={{ textAlign: 'center' }}>Featured Articles</h2>
        <FeaturedArticlesContainer>{renderFeatured()}</FeaturedArticlesContainer>
      </AnimateSharedLayout>
    </>
  )
}

// Flex container for articles
const FeaturedArticlesContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'center', // Center articles
})

// Individual article tile
const FeaturedArticleTile = styled('div', {
  flex: '0 1 calc(40% - 10px)',  // Two articles per row
  backgroundColor: 'transparent',  // Match website background
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  textAlign: 'center',  // Center text inside each tile
  h3: {
    margin: '0 0 5px 0',
    fontSize: '18px',
    fontWeight: '600',
    color: '#d35400',
  },
  p: {
    fontSize: '14px',
    color: '#555',
  },
  small: {
    display: 'block',
    marginTop: '10px',
    fontSize: '12px',
    color: '#888',
  },
  a: {
    color: '#d35400',  // Make the article title clickable with a distinct color
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})

Articles.Layout = Base

export default Articles
