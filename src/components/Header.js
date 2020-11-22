import React from 'react'
import { PageLink } from 'src/components/links'

export default function Header() {
  return (
    <header className="bg-blue-100 text-blue-500 p-3 flex items-center justify-center border-b border-gray-200">
      <PageLink className="no-underline font-semibold" href="/">
        Nick &amp; Laurie&rsquo;s Recipe Collection
      </PageLink>
    </header>
  )
}
