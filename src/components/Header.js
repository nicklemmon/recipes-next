import React from 'react'
import { PageLink } from 'src/components/links'

export default function Header() {
  return (
    <header className="bg-indigo-100 text-indigo-600 p-3 flex items-center justify-center">
      <PageLink className="no-underline font-semibold" href="/">
        Nick &amp; Laurie&rsquo;s Recipe Collection
      </PageLink>
    </header>
  )
}
