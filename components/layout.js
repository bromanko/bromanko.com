import Footer from '../components/footer'
import Meta from '../components/meta'
import React from 'react'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="my-8 text-gray-800">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
