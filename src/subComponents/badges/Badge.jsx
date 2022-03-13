import React from 'react'
import "./Badge.css"
const Badge = (props) => {
  return (
    <div className='badge'>{props.children}</div>
  )
}

export default Badge