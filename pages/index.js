import groq from 'groq'
import client from '../client'
import SeoHead from "../src/components/seo/seohead";
import { Module } from "../src/components/templates/modules/modulepicker";
import Layout from "../src/layout";
import { modules, modulestest, footermodule } from '../data/queries'
import { NextSeo } from 'next-seo';


const Index = (props) => {
    const {pages={}} = props
    const {seo={}} = pages;
    return (
      <>
        {Object.keys(seo).length !== 0 &&
          <SeoHead
            seo={seo}
          />
        }
      <Layout {...props}>
      {
        pages.pageBuilder.map(function(obj, index){
          //console.log({...Object.values(obj)[0]});
          const content = {...Object.values(obj)[0]}
          return (
            <Module
            moduleName={Object.keys(obj)[0]}
            onVariantChange={content}
            content={content}
          />)
        })
      }
        {/*<Module moduleName={"hero"}/>
        <Module moduleName={"grid"}/>
        <Module moduleName={"timeline"}/>
        <Module moduleName={"offer"}/>
        <Module moduleName={"portfolio"}/>
        <Module moduleName={"about"}/>*/}
      </Layout>
      </>
    )
}

export async function getStaticProps() {

    const pages = await client.fetch(groq`
      *[_type == "page" && slug.current == "index"][0]{
        pageBuilder[]{
          defined(_ref) => { ...@->content[0] {
            ${modules}

          }},
          !defined(_ref) => {
            ${modules}
          }
        },
        title,
        "slug": slug.current,
        seo,
      }
    `)
    const footer = await client.fetch(groq`
      *[_type == "footer"][0]{
        ${footermodule}
      }
    `)

    return {
      props: {
        pages,
        footer,
      },
      revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
    }
}

export default Index

{/*<SectionWrapper fullDistanceTop fullViewHeight>
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
</SectionWrapper>*/}
