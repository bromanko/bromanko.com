import Link from 'next/link'
import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-600 text-white rounded-lg p-2 text-lg leading-loose">
      <Link href="/">
          <a>
              Brian Romanko<br/>
              VP of Engineering at Bestow<br/>
              Passionate about software, design, and building high-performing teams
          </a>
      </Link>
    </header>
  )
}
