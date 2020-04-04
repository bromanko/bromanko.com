import markdownStyles from './markdown-styles.module.css'
import React from 'react'

export default function PostBody({ content }) {
  return (
    <div className="">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
