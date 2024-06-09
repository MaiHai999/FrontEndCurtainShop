import React, { Children } from 'react'
import FooterComponent from '../FooterComponent/FooterComponent'

const DefaultComponent = ({children}) => {
  return (
    <div>
      {children}
      <FooterComponent/>
    </div>
  )
}

export default DefaultComponent