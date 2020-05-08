import React from 'react'

const scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', height: '500px'} }>
      {props.children}
    </div> 
  )
}

export default scroll
