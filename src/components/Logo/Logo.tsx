import React from 'react'

import { Link } from 'react-router-dom'

const Logo:React.FC = () => {
  return (
    <div className="logotype">
      <Link to="/">
        <span>watch</span>
        <span>shop</span>
      </Link>
    </div>
  )
}

export default Logo