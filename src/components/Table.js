import React from 'react'

function Table({ children }) {
  return <table className="border-collapse bg-white w-full">{children}</table>
}

function Caption({ children }) {
  return <caption className="sr-only static">{children}</caption>
}

function Row({ children }) {
  return <tr className="text-left border">{children}</tr>
}

function Cell({ as = 'td', children }) {
  const Component = as

  return <Component className="p-6 text-gray-600">{children}</Component>
}

Table.Caption = Caption
Table.Row = Row
Table.Cell = Cell

export default Table
