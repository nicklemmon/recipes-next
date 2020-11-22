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

function HeadCell({ children }) {
  return <th className="p-5 text-gray-700">{children}</th>
}

function Cell({ children }) {
  return <td className="p-5 text-gray-500">{children}</td>
}

Table.Caption = Caption
Table.Row = Row
Table.HeadCell = HeadCell
Table.Cell = Cell

export default Table
