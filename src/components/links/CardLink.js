import React from 'react'
import classNames from 'classnames'
import { PageLink } from 'src/components/links'

export function CardLink({ as = PageLink, href, children, className }) {
  const Component = as
  const hoverStyles = 'hover:shadow hover:text-blue-500 hover:border-indigo-200'
  const focusStyles =
    'focus:text-blue-500 focus:ring-3 focus:ring-blue-600 focus:ring-opacity-50'

  return (
    <Component
      href={href}
      className={classNames(
        `flex flex-col items-center justify-center w-full h-full text-center border border-indigo-100 text-gray-600 no-underline p-16 bg-white shadow-md rounded-lg outline-none`,
        hoverStyles,
        focusStyles,
        className
      )}
    >
      {children}
    </Component>
  )
}
