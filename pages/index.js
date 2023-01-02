import SeoHead from "../src/components/seo/seohead";
import { Module } from "../src/components/templates/modules/modulepicker";
import Layout from "../src/layout";
import { modules, modulestest, footermodule } from "../data/queries";
import { NextSeo } from "next-seo";
import { getIndexPageData, getFooterData } from "../lib/api";
import { useGetPages } from "../src/components/atoms/fetcher/fetch";
import NotFoundPage from "./404";
import Fullpageloader from "../src/components/atoms/loader/fullpageloader";
import { useRouter } from "next/router";

const Index = (props) => {
  const router = useRouter();

  let { pages = {} } = props;
  const { seo = {} } = pages;

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: "index",
  // });

  if (!router.isFallback && !pages?.slug) {
    return <NotFoundPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <Fullpageloader />;
  }

  return (
    <>
      {Object.keys(seo).length !== 0 && <SeoHead seo={seo} />}
      <Layout {...props}>
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
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const pages = await getIndexPageData();
  const footer = await getFooterData();

  return {
    props: {
      pages,
      footer,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET
      ? parseInt(process.env.SANITY_REVALIDATE_SECRET)
      : parseInt(86400),
  };
}

export default Index;
