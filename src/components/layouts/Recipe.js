import React from 'react'
import Head from 'next/head'
import { SITE_TITLE } from 'src/constants'
import { Default } from 'src/components/layouts'
import { Heading } from 'src/components/text'

export default function Recipe({ title, children }) {
  return (
    <>
      <Head>
        <title>
          {title} | {SITE_TITLE}
        </title>
      </Head>

      <Default>
        <Heading as="h1">{title}</Heading>

        {children}
      </Default>
    </>
  )
}
