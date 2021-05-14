import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'

export default function PageLink(props) {
  const {
    onClick,
    onKeyDown,
    children,
    href,
    className,
    rel,
    query,
    target,
  } = props

  return (
    <Link href={{ pathname: href, query }} passHref onKeyDown={onKeyDown}>
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
