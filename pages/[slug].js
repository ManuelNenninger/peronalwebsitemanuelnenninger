import groq from "groq";
import client from "../client";
// import Module from "../src/components/templates/modulepicker";
import Layout from "../src/layout";
import SeoHead from "../src/components/seo/seohead";
import NotFoundPage from "./404";
import Fullpageloader from "../src/components/atoms/loader/fullpageloader";
import { useRouter } from "next/router";
import { getPageData, getFooterData } from "../lib/api";
import { useGetPages } from "../src/components/atoms/fetcher/fetch";
import PreviewAlert from "../src/components/atoms/loader/previewalert";
// Test Importe
import HeroSection from "../src/components/organisms/herosection";
import AgreementSection from "../src/components/organisms/agreementsection";
import ProcessTimeline from "../src/components/organisms/processtimeline";
import AboutSection from "../src/components/organisms/aboutsection";
import OfferSection from "../src/components/organisms/offersection";
import BlockSite from "../src/components/organisms/blocksite";
import PortfolioSection from "../src/components/organisms/portfoliosection";
import VisionSection from "../src/components/organisms/visionsection";

// Test Test Test ---------------------------------
const Notfall = (props) => {
  return <h1>Ups</h1>;
};
const Test = (props) => {
  return <h1>Ups</h1>;
};
const Module = ({ content, moduleName }) => {
  return <h1>Ups</h1>;
};
// Test Test Test---------------------------------

export default function Site({ pages = {}, footer = {}, preview = false }) {
  const { seo = {} } = pages;

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: pages?.slug,
  //   preview: preview,
  // });

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
  if (!router.isFallback && pages?.slug) {
    return (
      <>
        {Object.keys(seo).length !== 0 && <SeoHead seo={seo} />}
        <Layout footer={footer}>
          {preview && <PreviewAlert />}
          <h1>Test</h1>
          {/* {pages.pageBuilder.map(function (obj, index) {
            const content = { ...Object.values(obj)[0] };
            const modulename = Object.keys(obj)[0];
            if (modulename === "block") {
              return <Module moduleName={"block"} content={content} />;
            } else {
            }
          })} */}
          {/* <Module moduleName={"block"} content={}/> */}
          {/* {pages.pageBuilder?.map(function (obj, index) {
            console.log({ ...Object.values(obj)[0] });
            console.log("Module Name ist: ", Object.keys(obj)[0]);
            const content = { ...Object.values(obj)[0] };
            return (
              <Module
                moduleName={Object.keys(obj)[0]}
                onVariantChange={content}
                content={content}
              />
            ); 
          })} */}
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
  console.log("In getStaticProps wird der request erstellt");
  const pages = await getPageData(slug, preview);
  const footer = await getFooterData();
  console.log("Die Daten sind da für Pages: ", pages);
  console.log("Die Footer Daten sind: ", footer);

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
