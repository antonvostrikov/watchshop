import React from 'react'

import { DropdownContext } from './Dropdown'

const DropdownItem:React.FC<any> = ({ children, onChangeFilter }) => {
  const { setDropdown } = React.useContext(DropdownContext)
  
  const dropdownHandler = () => {
    setDropdown(false)
    onChangeFilter()
  }

  return <li onClick={() => dropdownHandler()}>{children}</li>
}

export default DropdownItem