import Link from 'next/link'
import groq from 'groq'
import client from '../client'
import Typography from '@mui/material/Typography';
import SectionWrapper from "../src/components/atoms/wrapperElements/sectionWrapper"

const Index = ({posts}) => {
    return (
      <SectionWrapper>
        <Typography variant="h1" gutterBottom>
          Welcome to a blog!
        </Typography>

        {posts.length > 0 && posts.map(
          ({ _id, title = '', slug = '', publishedAt = '' }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  {title}
                </Link>{' '}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
      </SectionWrapper>
    )
}

export async function getStaticProps() {
  //Denk dran, dass Du bei diesem query das Datum hinzufügen musst.
    const posts = await client.fetch(groq`
      *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
    `)
    const heroContent = await client.fetch(groq`
      *[_type == "heroSection"][0]
    `)
    console.log(heroContent);
    return {
      props: {
        posts,
        heroContent
      }
    }
}

export default Index
