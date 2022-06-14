import React from "react"
import '../App.css'

const Row = ({ children, style, ...props } : {children: React.ReactNode ,style? : React.CSSProperties, props?: any}) => {
  return (
    <div className='row' style={style} {...props}>
      {children}
    </div>
  )
}

export default Row
