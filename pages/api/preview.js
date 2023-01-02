import { getPageData, getFooterData } from "../../lib/api";

export default async function enablePreview(req, res) {
  //Check, if sanity secret and secret from nextJs is valid
  if (
    req.query.secret !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(404).json({ message: "Invalid token" });
  }
  const page = await getPageData(req.query.slug, true);

  if (!page) {
    return res.status(401).json({ message: "Invalid Slug!" });
  }
  res.setPreviewData({});
  res.writeHead(307, { Location: `/${page.slug}` });
  res.end();

  res.status(200).json({ message: "You may continue!" });
  // res.setPreviewData({})
  // res.end('Preview mode enabled')
}
