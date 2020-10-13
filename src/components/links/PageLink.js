import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export default function PageLink(props) {
  const { onClick, onKeyDown, children, href, className } = props

  return (
    <Link href={href} passHref onKeyDown={onKeyDown}>
      <a
        className={classNames('text-blue-600 underline', className)}
        data-id={props['data-id']}
        onClick={onClick}
      >
        {children}
      </a>
    </Link>
  )
}
