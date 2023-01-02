import groq from "groq";
import client from "../client";
import { Module } from "../src/components/templates/modules/modulepicker";
import Layout from "../src/layout";
import SeoHead from "../src/components/seo/seohead";
import NotFoundPage from "./404";
import Fullpageloader from "../src/components/atoms/loader/fullpageloader";
import { useRouter } from "next/router";
import { getPageData, getFooterData } from "../lib/api";
import PreviewAlert from "../src/components/atoms/loader/previewalert";

export default function Site(props) {
  const { pages = {} } = props;
  const { seo = {} } = pages;
  const { preview = false } = props;
  const router = useRouter();

  // If fallback is over and no page data is availible, show 404.js
  if (!router.isFallback && !pages?.slug) {
    return <NotFoundPage statusCode={404} />;
  }

  // If the page is not yet Server-side generated, router.isFallback === true
  // getStaticPaths fallback is true. So this code gets executed. If false, 404.js is showen.
  // getStaticPaths & -Props is executed in fallback-Mode.
  // If no loading sign is shown, the screen is simple white.
  if (router.isFallback) {
    return <Fullpageloader />;
  }

  // If the page is not yet generated, router.isFallback === true
  //If Page is pre-rendered, fallback is false
  //Add loader Component if router.isFallback === true
  //Check for more https://nextjs.org/docs/api-reference/data-fetching/get-static-paths#fallback-pages
  if (!router.isFallback) {
    return (
      <>
        {Object.keys(seo).length !== 0 && <SeoHead seo={seo} />}
        <Layout {...props}>
          {preview && <PreviewAlert />}
          {pages.pageBuilder?.map(function (obj, index) {
            //console.log({...Object.values(obj)[0]});
            const content = { ...Object.values(obj)[0] };
            return (
              <Module
                moduleName={Object.keys(obj)[0]}
                onVariantChange={content}
                content={content}
              />
            );
          })}
          {/*<Module moduleName={"hero"}/>
        <Module moduleName={"grid"}/>
        <Module moduleName={"timeline"}/>
        <Module moduleName={"offer"}/>
        <Module moduleName={"portfolio"}/>
        <Module moduleName={"about"}/>*/}
        </Layout>
      </>
    );
  }
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "page" && defined(slug.current)][].slug.current`
  );
  //In paths sind nun alle slugs enthalten die Du auf Sainty in der Cloud hast.
  //getStaticPaths is required for dynamic SSG pages. So for [slug].js-files
  //Die JSON Struktur sieht z.B wie folgt aus:  params: { slug: 'impressum' },
  //Alle Slugs die im Path hinterlegt sind werden Server-side-generated
  //Fallback true: https://nextjs.org/docs/api-reference/data-fetching/get-static-paths
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.params;
  const { preview = false, previewData } = context;

  const pages = await getPageData(slug, preview);
  const footer = await getFooterData();

  return {
    props: {
      pages,
      footer,
      preview,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET
      ? parseInt(process.env.SANITY_REVALIDATE_SECRET)
      : parseInt(86400),
  };
}
