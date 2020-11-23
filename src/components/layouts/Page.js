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
    <Heading as="h1" className="text-indigo-600">
      {children}
    </Heading>
  )
}

function Breadcrumbs({ children, href }) {
  return (
    <div className="mt-3">
      <PageLink className="text-blue-600" href={href}>
        {children}
      </PageLink>
    </div>
  )
}

Page.Header = Header
Page.Title = Title
Page.Breadcrumbs = Breadcrumbs

export default Page
