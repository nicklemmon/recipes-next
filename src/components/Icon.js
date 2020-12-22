import React from 'react'

export default function Icon({ as, label, size }) {
  const role = label ? 'img' : 'presentation'
  const ariaLabel = label ? label : null
  const styles = {
    fontSize: size,
  }

  return (
    <span role={role} aria-label={ariaLabel} style={styles}>
      {as}
    </span>
  )
}
