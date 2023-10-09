import React from 'react'

import { DropdownContext } from './Dropdown'

const DropdownButton:React.FC<any> = ({ children }) => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  return <span onClick={() => toggleDropdown()}>{children}</span>

}

export default DropdownButton