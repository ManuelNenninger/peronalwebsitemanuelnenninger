import groq from 'groq'
import client from '../client'
import { Module } from "../src/components/templates/modules/modulepicker";
import Layout from "../src/layout";
import { modules, modulestest, footermodule } from '../data/queries'

export default function Site(props){
  const {pages=""} = props

  return(
    <>
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

export async function getStaticPaths() {

  const paths = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  )
  //In paths sind nun alle slugs enthalten die Du auf Sainty in der Cloud hast.
  //Diese Slugs werden an params weitergegeben, sodass getStaticProps diesen via context.params zur verfuegung steht.
  return {
    paths: paths.map((slug) => ({params: {slug}})),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params

  const pages = await client.fetch(groq`
    *[_type == "page" && slug.current == $slug][0]{
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
  `,{ slug })
  const footer = await client.fetch(groq`
    *[_type == "footer"][0]{
      ${footermodule}
    }
  `)

  console.log(pages);
  return {
    props: {
      pages,
      footer,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET ? parseInt(process.env.SANITY_REVALIDATE_SECRET) : parseInt(86400),
  }
}
