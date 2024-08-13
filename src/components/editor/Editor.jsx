import React from 'react'

import Markdown from '../markdown/Markdown'
import Preview from '../preview/Preview'

const Editor = () => {
  return (
    <div className='editor'>
      <Markdown />
      <Preview />
    </div>
  )
}

export default Editor