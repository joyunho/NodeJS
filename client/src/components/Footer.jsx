 import React from 'react'
 import Logo from "../images/Logo.png"

const Footer = () => {
  return (
    <div>
      <footer>
        <img src={Logo} alt="" />
        <span>Made with # and <b>React.js</b>.</span>
      </footer>
    </div>
  )
}

export default Footer