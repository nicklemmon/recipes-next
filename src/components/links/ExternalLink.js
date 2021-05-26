import React from 'react'
import { PageLink } from 'src/components/links'

export function ExternalLink(props) {
  const { children, className } = props

  return (
    <PageLink className={className} rel="noopener noreferrer" target="_blank">
      {children}
    </PageLink>
  )
}
