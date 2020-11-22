import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export default function PageLink(props) {
  const { onClick, onKeyDown, children, href, className, rel, target } = props

  return (
    <Link href={href} passHref onKeyDown={onKeyDown}>
      <a
        className={classNames('underline', className)}
        data-id={props['data-id']}
        onClick={onClick}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    </Link>
  )
}
