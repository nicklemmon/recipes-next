import React from 'react'
import { PageLink } from 'src/components/links'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div>
      <footer className="text-gray-800 p-3 sticky bottom-0">
        <p className="text-center">
          All rights reserved&nbsp;
          <PageLink
            href="https://nicklemmon.com"
            rel="noopener noreferrer"
            target="_blank"
            title="Opens in a new tab"
          >
            Nick Lemmon
          </PageLink>
          ,<span>&nbsp;{currentYear}</span>
        </p>
      </footer>
    </div>
  )
}
