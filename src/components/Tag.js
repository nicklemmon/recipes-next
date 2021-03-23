import React from 'react'
import classNames from 'classnames'

function getColorClasses(color) {
  switch (color) {
    case 'yellow': {
      return 'bg-yellow-50 text-gray-800'
    }

    case 'green': {
      return 'bg-green-100 text-green-800'
    }

    case 'red': {
      return 'bg-red-100 text-red-800'
    }

    case 'pink': {
      return 'bg-pink-100 text-pink-500'
    }

    case 'blue': {
      return 'bg-blue-100 text-blue-600'
    }

    case 'indigo': {
      return 'bg-indigo-100 text-indigo-600'
    }

    default: {
      return 'bg-gray-200 text-gray-600'
    }
  }
}

export default function Tag({ children, color, className }) {
  const colorClasses = getColorClasses(color)

  return (
    <div
      className={classNames(
        colorClasses,
        'py-1 rounded px-2 text-sm inline-flex',
        className
      )}
    >
      {children}
    </div>
  )
}
