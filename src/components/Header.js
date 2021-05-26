import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { PageLink } from 'src/components/links'
import { Label, Field } from 'src/components/forms'
import { ScreenReaderOnly } from 'src/components'

export function Header() {
  return (
    <header className="bg-indigo-100 text-indigo-600 flex p-3 grid grid-cols-3 justify-between items-center">
      <div />

      <div className="flex items-center justify-center">
        <PageLink className="no-underline font-semibold" href="/">
          Nick &amp; Laurie&rsquo;s Recipe Collection
        </PageLink>
      </div>

      <div className="justify-self-end">
        <SearchForm />
      </div>
    </header>
  )
}

function SearchForm() {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    router.push(`/search-results?search=${search}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <ScreenReaderOnly as={Label} htmlFor="search-field">
        Search
      </ScreenReaderOnly>

      <Field
        id="search-field"
        onChange={e => setSearch(e.target.value)}
        value={search}
      >
        <Field.Button type="submit">Go</Field.Button>
      </Field>
    </form>
  )
}
