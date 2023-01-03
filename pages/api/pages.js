import { getPageData, getFooterData } from "../../lib/api";

export default async function blogRequestAPI(req, res) {
  const { slug = "", preview = false } = req.body;
  const pages = await getPageData(slug, preview);
  console.log("Es werden Daten im Backend von Sanity angefragt für: ", slug);
  console.log("useSWR preview ist: ", preview);
  res.status(200).json(pages);
}
