import React from 'react'

import { DropdownContext } from './Dropdown'

const DropdownItem:React.FC<any> = ({ children }) => {
  const { setDropdown } = React.useContext(DropdownContext)
  
  return <li onClick={() => setDropdown(false)}>{children}</li>
}

export default DropdownItem