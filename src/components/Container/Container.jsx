import React from 'react'
import './style.scss'

const Container = ({ children }) => {
  return (
    <div className='container'>
      { children }
    </div>
  )
}

export default Container
