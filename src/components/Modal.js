import React, { useEffect, useCallback } from 'react'
import FocusLock from 'react-focus-lock'
import { ImCross } from 'react-icons/im'
import classNames from 'classnames'
import { Heading } from 'src/components/text'
import { Icon, ScreenReaderOnly } from 'src/components'

export function Modal({ children, title, className, onClose }) {
  const handleKeyUp = useCallback(event => {
    if (event.key === 'Escape') {
      onClose()
    }
  })

  // Listen for the escape key on mount, remove the listener when un-mounting
  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <>
      {/* Background overlay */}
      <div
        role="presentation"
        className="absolute top-0 left-0 w-screen h-screen bg-gray-500 opacity-80"
        onClick={onClose}
      />

      <div
        className={classNames(
          'bg-white rounded-lg shadow fixed absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl',
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        <FocusLock returnFocus={true}>
          <div className="p-6 relative" tabIndex="-1">
            <div className="mb-5">
              <Heading as="h3">{title}</Heading>
            </div>

            {children}

            <button onClick={onClose} className="absolute top-0 right-0 p-4">
              <ScreenReaderOnly>Close Dialog</ScreenReaderOnly>

              <Icon as={<ImCross className="text-indigo-600" />} />
            </button>
          </div>
        </FocusLock>
      </div>
    </>
  )
}
