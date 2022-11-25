// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import post from './documents/post'
import page from "./documents/page"
import section from "./documents/section"
import impressum from "./documents/impressum"
import footer from "./documents/footer"

// Module types
import author from './modules/author'
import blockContent from './modules/blockContent'
import category from './modules/category'
import herosection from './modules/herosection'
import cta from './modules/cta'
import aboutsection from "./modules/aboutsection"
import grid from "./modules/grid"
import processsection from "./modules/processsection"
import faqsection from "./modules/faqsection"
import offersection from "./modules/offersection"

// Object types
import seo from "./objects/seo"
import gridsize from "./objects/grid-size"
import gridcolumn from "./objects/grid-column"
import agreementcard from "./objects/agreementcard"
import processstep from "./objects/processstep"
import faqrow from "./objects/faqrow"
import footerrow from "./objects/footerrow"
import footerlink from "./objects/footerlink"
import footersocial from "./objects/footersocial"
import sectionsettings from "./objects/sectionsettings"
import offercard from "./objects/offercard"

// Object types

/*  ------------------------------------------ */
/*  Your Schema documents / modules / objects
/*  ------------------------------------------ */

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* 1: Document types */
    post,
    page,
    section,
    impressum,
    footer,
    /* 2: Module types */
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    herosection,
    author,
    category,
    cta,
    aboutsection,
    grid,
    processsection,
    faqsection,
    offersection,
    /* 3: Object types */
    seo,
    gridsize,
    gridcolumn,
    agreementcard,
    processstep,
    faqrow,
    footerrow,
    footerlink,
    footersocial,
    sectionsettings,
    offercard,
  ]),
})
