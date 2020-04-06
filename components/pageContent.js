import React from 'react'
import Header from './header'

export default function PageContent({ children }) {
  return (
    <div className="container max-w-3xl mx-auto px-6">
      <Header />
      <section>
        <div className="mt-8 px-4">{children}</div>
      </section>
    </div>
  )
}
