import { getPageData, getFooterData } from "../../lib/api";

export default async function blogRequestAPI(req, res) {
  const { slug = "" } = req.body;
  const pages = await getPageData(slug);
  console.log("Es werden Daten im Backend von Sanity angefragt.");
  res.status(200).json(pages);
}
