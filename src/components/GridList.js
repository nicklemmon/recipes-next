import React from 'react'

function GridList({ children }) {
  return (
    <div
      role="list"
      className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
    >
      {children}
    </div>
  )
}

function Item({ children }) {
  return (
    <div role="listitem" className="inline-flex w-full h-full">
      {children}
    </div>
  )
}

Item.displayName = 'GridList.Item'
GridList.Item = Item

export default GridList
