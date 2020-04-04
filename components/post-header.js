import Date from '../components/date'
import PostTitle from '../components/post-title'
import React from "react";

export default function PostHeader({ title, date, slug }) {
  return (
    <>
      <PostTitle slug={slug} title={title}/>
      <Date dateString={date} />
    </>
  )
}
