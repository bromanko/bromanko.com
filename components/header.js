import Link from 'next/link'
import React from "react";

export default function Header() {
  return (
      <Link href="/">
          <a>
              <header className="bg-gray-200 text-white rounded-lg p-4 text-lg leading-loose">
              // Brian Romanko<br/>
              // VP of Engineering at Bestow<br/>
              // Passionate about software, design, and building high-performing teams
              </header>
          </a>
      </Link>
  )
}
