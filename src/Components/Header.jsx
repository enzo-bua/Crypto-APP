import React from 'react'

const Header = (props) => {
  return (
    <nav>
        <div className="nav-wrapper light-orange darken-2">
            <a className="brand-logo center">{props.titulo}</a>
        </div>
    </nav>
  )
}

export default Header;