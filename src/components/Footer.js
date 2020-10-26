import React from 'react'
import { PageLink } from 'src/components/links'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-200 p-3 sticky bottom-0">
      <p className="text-right">
        All rights reserved&nbsp;
        <PageLink href="https://nicklemmon.com">Nick Lemmon</PageLink>,
        {currentYear}
      </p>
    </footer>
  )
}
