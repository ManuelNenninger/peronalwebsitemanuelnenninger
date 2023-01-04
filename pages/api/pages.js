import { getPageData, getFooterData } from "../../lib/api";

export default async function blogRequestAPI(req, res) {
  const { slug = "", preview = false } = req.body;
  console.log("Es werden Daten im Backend von Sanity angefragt für: ", slug);
  console.log("useSWR in api/pages preview ist: ", preview);
  const pages = await getPageData(slug, preview);
  console.log("Daten sind in api/pages da: ", pages);
  res.status(200).json(pages);
}
