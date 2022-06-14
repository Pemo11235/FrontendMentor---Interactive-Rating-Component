import React from 'react'

const IconButton = ({
  children,
  className,
  onClick,
  style,
  ...props
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
  props?: any
}) => {
  return (
    <div className={`iconButton ${className ?? ''}`} style={style} onClick={onClick} {...props}>
      {children}
    </div>
  )
}

export default IconButton
