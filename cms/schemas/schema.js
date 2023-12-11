// First, we must import the schema creator

// Then import schema types from any plugins that might expose them
import project from './project'
import resource from './devResource'
import techtool from './techtool'
import post from './post'
import author from './author'
import postCategory from './postCategory'
import postTag from './postTag'
import link from './link'
import linkCategory from './linkCategory'
import extrasPage from './extrasPage'

//Overall Types
import blockContent from './blockContent'

//Block Content Imports
import annotatedImage from './blocks/annotatedImage'
import codeBlock from './blocks/codeBlock'
// import codeBlock from 'schemas/blocks/codeBlock'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  project,
  resource,
  techtool,
  blockContent,
  post,
  author,
  postCategory,
  postTag,
  annotatedImage,
  codeBlock,
  link,
  linkCategory,
  extrasPage,
]
