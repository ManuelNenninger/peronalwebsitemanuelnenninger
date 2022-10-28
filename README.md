This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Das ist ein Template für eine NextJs App.

Sie enthält bereits die ATOM-Ordnerstruktur. 

Der Syntax für die verwendung von Material UI V5 ist vorhanden.

Sie kann via den Sanity-Client an das headless CMS Sanity angebunden werden.

Die Basic Struktur für einen Blog ist ebenfalls bereits angelegt.
Gemanaged wird der Blog COntent von Sanity inkl. SSR.
Du musst dafür nur ein neues Sanity Projekt erstellen und im Sanity Client die projectId und das dataset hinterlegen.
Eine Anleitung findest Du unter https://www.sanity.io/blog/build-your-own-blog-with-sanity-and-next-js.
// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'xxxx', // you can find this in sanity.json
  dataset: 'xxxx', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})

Der sectionWrapper (v1) ist unter Atoms bereits hinterlegt. 
