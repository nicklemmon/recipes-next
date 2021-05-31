import React from 'react'

export function Icon({ as, className, label, size, fill = 'inherit' }) {
  const role = label ? 'img' : 'presentation'
  const ariaLabel = label ? label : null
  const styles = {
    fontSize: size,
    fill: fill,
  }

  return (
    <span
      className={className}
      role={role}
      aria-label={ariaLabel}
      style={styles}
    >
      {as}
    </span>
  )
}
