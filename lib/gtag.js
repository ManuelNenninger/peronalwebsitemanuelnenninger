{/* Google Tag Manager - Page Route base code */}
//https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}
//https://developers.google.com/analytics/devguides/collection/gtagjs/events
//Special gtag fuer Events. Ich will sehen wie viele auf Bestellen / Preis waren, und wie viele wirklich am ende bestellt haben.
export const event = () => {
  window.gtag('event', "payment_info", {
    event_category: "Information_Ueber_Preis",
    event_label: "payment",
    value: 1,
  })
}
