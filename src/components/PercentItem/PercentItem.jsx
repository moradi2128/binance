import React from 'react'
import "./PercentItem.css"
const PercentItem = (props) => {
  return (
    <div className='percent-item'>{props.value}</div>
  )
}

export default PercentItem