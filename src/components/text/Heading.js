import React from 'react'
import classNames from 'classnames'

export default function Heading({ as, looksLike, children, className }) {
  const baseClassNames = looksLike
    ? getHeadingClassNames(looksLike)
    : getHeadingClassNames(as)
  const ariaLevel = as.replace('h', '')

  return (
    <div
      role="heading"
      aria-level={ariaLevel}
      className={classNames(baseClassNames, className)}
    >
      {children}
    </div>
  )
}

function getHeadingClassNames(heading) {
  switch (heading) {
    case 'h1':
      return ''
    case 'h2':
      return ''
    case 'h3':
      return ''
    case 'h4':
      return ''
    case 'h5':
      return ''
    case 'h6':
      return ''
    default:
      throw new Error(`Heading ${heading} must be h1, h2, h3, h4, h5, or h6`)
  }
}
