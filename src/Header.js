import React from 'react'

const Header = (props) => { //other option would be distructuring { title }
  return (
    <header>
      <h1>{props.title}</h1> {/* ... and then just {title} here */}
    </header>
  )
}

export default Header

