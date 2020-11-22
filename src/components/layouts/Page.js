import React from 'react'
import { Default } from 'src/components/layouts'
import { Heading } from 'src/components/text'

export default function Page({ title, children }) {
  return (
    <Default>
      <div className="mb-8">
        <Heading as="h1" className="text-gray-700">
          {title}
        </Heading>
      </div>

      {children}
    </Default>
  )
}
