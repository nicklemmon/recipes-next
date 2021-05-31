import React from 'react'

export function Icon({ as, label, size, fill = 'inherit' }) {
  const role = label ? 'img' : 'presentation'
  const ariaLabel = label ? label : null
  const styles = {
    fontSize: size,
    fill: fill,
  }

  return (
    <span role={role} aria-label={ariaLabel} style={styles}>
      {as}
    </span>
  )
}
