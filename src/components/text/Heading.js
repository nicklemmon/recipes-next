import React from 'react'
import classNames from 'classnames'

export default function Heading({ as, looksLike, children, className }) {
  const looksLikeClassNames = looksLike
    ? getHeadingClassNames(looksLike)
    : getHeadingClassNames(as)
  const ariaLevel = as.replace('h', '')

  return (
    <div
      role="heading"
      aria-level={ariaLevel}
      className={classNames('font-semibold', looksLikeClassNames, className)}
    >
      {children}
    </div>
  )
}

function getHeadingClassNames(heading) {
  switch (heading) {
    case 'h1':
      return 'text-4xl'
    case 'h2':
      return 'text-3xl'
    case 'h3':
      return 'text-2xl'
    case 'h4':
      return 'text-xl'
    case 'h5':
      return 'text-lg'
    case 'h6':
      return 'text-base'
    default:
      throw new Error(`Heading ${heading} must be h1, h2, h3, h4, h5, or h6`)
  }
}
