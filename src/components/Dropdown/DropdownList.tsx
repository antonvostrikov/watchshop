import React from 'react'

const DropdownList: React.FC<any> = ({ children }) => {
  return <ul className="dropdown-content__list">{children}</ul>
}

export default DropdownList