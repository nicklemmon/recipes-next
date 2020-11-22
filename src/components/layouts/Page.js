import React from 'react'
import { Default } from 'src/components/layouts'
import { Heading } from 'src/components/text'
import { PageLink } from 'src/components/links'

function Page({ children }) {
  return <Default>{children}</Default>
}

function Header({ children }) {
  return <div className="mb-8 flex flex-col">{children}</div>
}

function Title({ children }) {
  return (
    <div className="mb-3">
      <Heading as="h1" className="text-gray-700">
        {children}
      </Heading>
    </div>
  )
}

function Breadcrumbs({ children, href }) {
  return (
    <PageLink className="text-blue-600" href={href}>
      {children}
    </PageLink>
  )
}

Page.Header = Header
Page.Title = Title
Page.Breadcrumbs = Breadcrumbs

export default Page
