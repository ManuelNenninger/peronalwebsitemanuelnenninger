// Construct our "blocks" GROQ
export const blocksgrid = `
  _type == 'agreementcard' => {
    _type,
    _key,
    iconname,
    title,
    body,
  },
`
// Construct our "processstep" GROQ
export const blocksprocessstep = `
  _type == 'processstep' => {
    _type,
    _key,
    mainTitle,
    iconname,
    describtion,
    mainImage,
  },
`
// Construct our "faqrow GROQ
export const blockfaqbuilder = `
  _type == 'faqrow' => {
    _type,
    _key,
    title,
    body,
  },
`
// Construct our "mediainfocard GROQ
export const blockmediainfocard = `
  _type == 'mediainfocard' => {
    _type,
    _key,
    cardtitle,
    body,
    mainImage,
  },
`

// Construct our "faqrow GROQ
export const blockspecialpricecard = `
  _type == 'priceinfo' => {
    _type,
    _key,
    pricecardtitle,
    pricecarddescribtion,
    pricecardprice,
  },
`

// Construct our "offercard GROQ
export const blockoffercard = `
  _type == 'offercard' => {
    _type,
    _key,
    title,
    body,
  },
`

// Construct our "offercard GROQ
export const blockportfoliocard = `
  _type == 'portfoliocard' => {
    _type,
    _key,
    title,
    url,
    color,
    body,
  },
`

// Construct our content "modules" GROQ
export const modules = `
  _type == 'grid' => {
    "grid": {
        _type,
        _key,
        sectionsettings,
        sectionTitle,
        size,
        columns[]{
          sizes[]{
            breakpoint,
            width,
            justify,
            align,
            start
          },
          blocks[]{
            ${blocksgrid}
          }
        }
      }
    },
  _type == 'processsection' => {
    "process": {
      _type,
      _key,
      sectionsettings,
      sectionTitle,
      processbuilder[]{
        ${blocksprocessstep}
      },
    }
  },
  _type == 'herosection' => {
    "hero": {
      _type,
      _key,
      heroTitle,
      heroDescribtion,
      mainImage,
      "primaryCallToAction": primaryCallToAction->{url,linkText},
    }
  },
  _type == 'aboutsection' => {
    "about": {
      _type,
      _key,
      sectionsettings,
      aboutTitle,
      body,
    }
  },
  _type == 'visionsection' => {
    "vision": {
      _type,
      _key,
      sectionsettings,
      sectiontitle,
      body,
    }
  },
  _type == 'faqsection' => {
    "faqsection": {
      _type,
      _key,
      sectionsettings,
      faqsectiontitle,
      mainImage,
      alignment,
      faqbuilder[]{
        ${blockfaqbuilder}
      }
    }
  },
  _type == 'cardinfosection' => {
    "cardinfosection": {
      _type,
      _key,
      sectionsettings,
      sectionTitle,
      cardbuilder[]{
        ${blockmediainfocard}
      },
    }
  },
  _type == 'specialpricesection' => {
    "specialpricesection": {
      _type,
      _key,
      sectionsettings,
      sectionTitle,
      sectionDescribtion,
      priceinfobuilder[]{
        ${blockspecialpricecard}
      },
    }
  },
  _type == 'offersection' => {
    "offer": {
      _type,
      _key,
      sectionsettings,
      sectiontitle,
      offercardbuilder[]{
        ${blockoffercard}
      },
    }
  },
  _type == 'portfoliosection' => {
    "portfolio": {
      _type,
      _key,
      sectiontitle,
      portfoliobuilder[]{
        ${blockportfoliocard}
      },
    }
  },
  _type == 'blocksite' => {
    "block": {
      _type,
      _key,
      title,
      body,
      sectionsettings,
    }
  },
`
export const footermodule = `
brandname,
footersocial,
footerrowbuilder[]{
  _type == 'footerrow' => {
    _type,
    _key,
    metaTitle,
    linkbuilder[]{
      _type == 'footerlink' =>{
        linkname,
        url,
      }
    },
},
},
`
