import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import { useRouter } from 'next/router'
import { PageLink } from 'src/components/links'
import { Label, Field } from 'src/components/forms'
import { Button } from 'src/components/actions'
import { Icon, Modal, ScreenReaderOnly } from 'src/components'

export function Header() {
  const [searchModalOpen, setSearchModalOpen] = useState(false)

  return (
    <>
      <header className="bg-indigo-100 text-indigo-600 flex p-3 grid grid-cols-3 justify-between items-center">
        <div />

        <div className="flex items-center justify-center">
          <PageLink className="no-underline font-semibold" href="/">
            Nick &amp; Laurie&rsquo;s Recipe Collection
          </PageLink>
        </div>

        <div className="justify-self-end">
          <button
            onClick={() => setSearchModalOpen(true)}
            className="flex items-center justify-center w-6 h-6"
          >
            <ScreenReaderOnly>Search (Opens a dialog)</ScreenReaderOnly>

            <Icon as={<ImSearch />} />
          </button>
        </div>
      </header>

      {searchModalOpen ? (
        <SearchModal onClose={() => setSearchModalOpen(false)} />
      ) : null}
    </>
  )
}

function SearchModal({ onClose }) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = e => {
    e.preventDefault()

    router.push(`/search-results?search=${search}`)
  }

  return (
    <Modal title="Search Recipes" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <ScreenReaderOnly as={Label} htmlFor="search-field">
            Search
          </ScreenReaderOnly>

          <Field
            id="search-field"
            onChange={e => setSearch(e.target.value)}
            value={search}
            autoComplete="off"
            required
          />
        </div>

        <Button type="submit" variant="primary">
          Search
        </Button>
      </form>
    </Modal>
  )
}
