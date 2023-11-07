import React from 'react'

import { DropdownContext } from './Dropdown'

type DropdownSet = {
  sortName: string
  sortProperty: string
  sortHandler: (sortItem: any) => void
}

const DropdownItemSet:React.FC<DropdownSet> = ({ sortName, sortProperty, sortHandler }) => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const setHandler = () => {
    sortHandler({ "name": sortName, "sortProperty": sortProperty })
    setDropdown(!dropdown)
  }

  return <li onClick={() => setHandler()}>{sortName}</li>
}

export default DropdownItemSet