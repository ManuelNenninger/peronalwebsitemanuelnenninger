import { NextSeo } from "next-seo";
import { urlFor } from "../../../lib/sanity";
import Head from "next/head";

export default function SeoComponent({ seo = {}, slug }) {
  const {
    metaTitle = "",
    shareTitle = "",
    metaDesc = "",
    shareDesc = "",
    shareGraphic = [],
  } = seo;

  let origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  let url = slug ? "www.manuelnenninger.de/" + slug : "www.manuelnenninger.de";

  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDesc}
        canonical={url}
        type="Website"
        openGraph={{
          url: url,
          title: shareTitle,
          description: shareDesc,
          images: shareGraphic.length !== 0 && [
            {
              url: urlFor(shareGraphic).url(),
              width: 800,
              height: 600,
              alt: metaTitle,
              type: "image/jpeg",
            },
            {
              url: urlFor(shareGraphic).url(),
              width: 900,
              height: 800,
              alt: metaTitle,
              type: "image/jpeg",
            },
            { url: urlFor(shareGraphic).url() },
            { url: urlFor(shareGraphic).url() },
          ],
          siteName: url,
          type: "website",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
