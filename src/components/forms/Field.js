import React from 'react'
import classNames from 'classnames'

function Field({
  id,
  name,
  className,
  autoComplete,
  children,
  type,
  required,
  onChange,
  onFocus,
  onBlur,
}) {
  const baseStyles =
    'overflow-hidden bg-white flex w-full rounded border border-gray-300 outline-none'
  const focusStyles =
    'focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-opacity-50'

  return (
    <div className={classNames(baseStyles, focusStyles, className)}>
      <input
        className="px-2 py-2 w-full h-full focus:outline-none"
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        autoComplete={autoComplete}
        required={required}
      />

      {children}
    </div>
  )
}

function Button({ onClick, children, className, type = 'button' }) {
  return (
    <button
      className={classNames('px-2', className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Field.Button = Button

export { Field }
