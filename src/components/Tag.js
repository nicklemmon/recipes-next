import React from 'react'

export default function Tag({ children }) {
  return (
    <div className="bg-indigo-100 text-indigo-500 py-1 rounded px-2 text-sm inline-flex">
      {children}
    </div>
  )
}
