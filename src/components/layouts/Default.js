import React from 'react'
import { Footer, Header } from 'src/components'

export default function Default({ children }) {
  return (
    <div className="h-full min-h-screen flex flex-col">
      <Header />

      <main className="p-3 max-w-5xl w-full m-auto flex-1">{children}</main>

      <Footer />
    </div>
  )
}
