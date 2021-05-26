import React from 'react'
import classNames from 'classnames'

function Field({
  id,
  name,
  className,
  children,
  type,
  onChange,
  onFocus,
  onBlur,
}) {
  const baseStyles =
    'overflow-hidden bg-white flex w-full rounded-3xl border outline-none'
  const focusStyles =
    'focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-opacity-50'

  return (
    <div className={classNames(baseStyles, focusStyles, className)}>
      <input
        className="px-2 py-1 focus:outline-none"
        id={id}
        name={name}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
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
