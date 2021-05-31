import React from 'react'
import classNames from 'classnames'

export function Button({
  onClick,
  type = 'button',
  variant,
  children,
  className,
}) {
  const sharedStyles = 'flex px-3 py-2 text-base rounded'
  const variantStyles = getVariantStyles(variant)

  return (
    <button
      className={classNames(sharedStyles, variantStyles, className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

function getVariantStyles(variant) {
  switch (variant) {
    case 'primary': {
      return 'text-white bg-indigo-600'
    }

    case 'secondary': {
      return ''
    }

    case 'tertiary':
    default: {
      return ''
    }
  }
}
