import React from 'react'
import { Footer, Header } from 'src/components'

export default function Default({ children }) {
  return (
    <div className="h-full">
      <Header />

      <main className="p-3 max-w-5xl m-auto">{children}</main>

      <Footer />
    </div>
  )
}
