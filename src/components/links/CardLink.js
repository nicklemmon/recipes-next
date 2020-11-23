import React from 'react'
import classNames from 'classnames'
import { PageLink } from 'src/components/links'

export default function CardLink({ as = PageLink, href, children, className }) {
  const Component = as
  const hoverStyles = 'hover:shadow hover:text-blue-500'
  const focusStyles =
    'hover:shadow focus:text-blue-500 focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50'

  return (
    <Component
      href={href}
      className={classNames(
        `flex flex-col items-center justify-center w-full h-full text-center text-gray-600 no-underline p-16 bg-white shadow-lg rounded-lg outline-none ${hoverStyles} ${focusStyles}`,
        className
      )}
    >
      {children}
    </Component>
  )
}
