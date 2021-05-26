import React from 'react'

export function ScreenReaderOnly({ as, children, id, ...props }) {
  const Component = as ? as : 'span'

  return (
    <Component id={id} className="sr-only" {...props}>
      {children}
    </Component>
  )
}
