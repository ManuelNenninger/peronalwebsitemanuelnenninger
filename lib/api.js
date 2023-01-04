import client, { previewClient } from "../client";
import groq from "groq";
import { modules, footermodule } from "../data/queries";

const getClient = async (preview) => (preview ? previewClient : client);

export async function getIndexPageData() {
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
    `);
  return pages;
}

export async function getPageData(slug, preview) {
  const currentClient = await getClient(preview);
  console.log("In lib/api wird der Request gemacht");
  const pages = await currentClient.fetch(
    groq`
    *[_type == "page" && slug.current == $slug]{
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
  `,
    { slug }
  );
  // .then((res) => {
  //   if (res.length === 0) {
  //     console.log("Keine Daten von lib/api");
  //     return {};
  //   }
  //   return preview ? (res?.[1] ? res[1] : res[0]) : res?.[0];
  // });
  console.log("Request ist finished", pages);
  if (pages.length === 0) {
    console.log("Leeres Obj wird gesended");
    return {};
  }
  return pages[0];
}

export async function getFooterData() {
  const footer = await client.fetch(groq`
      *[_type == "footer"][0]{
        ${footermodule}
      }
    `);
  return footer;
}
