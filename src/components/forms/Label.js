import React from 'react'
import classNames from 'classnames'

export function Label({ htmlFor, id, children, className }) {
  return (
    <label
      className={classNames(
        'flex font-semibold text-gray-800 text-base mb-1',
        className
      )}
      htmlFor={htmlFor}
      id={id}
    >
      {children}
    </label>
  )
}
