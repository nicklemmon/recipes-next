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
  const focusStyles = 'focus:ring-4 focus:ring-indigo-600 focus:ring-opacity-50'
  const variantStyles = getVariantStyles(variant)

  return (
    <button
      className={classNames(
        sharedStyles,
        focusStyles,
        variantStyles,
        className
      )}
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
