import React from 'react'
import classNames from 'classnames'

export function Bold({ children, className }) {
  return <span className={classNames('font-bold', className)}>{children}</span>
}
