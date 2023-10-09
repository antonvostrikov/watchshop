import React from 'react'

import { DropdownContext } from './Dropdown'

const DropdownContent:React.FC<any> = ({ children }) => {
  const { dropdown, setDropdown } = React.useContext(DropdownContext)

  return (
    <div className={dropdown ? "dropdown-content active" : "dropdown-content"}>
      {children}
    </div>
  )
}

export default DropdownContent