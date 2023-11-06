import React from 'react'

import { DropdownContext } from './Dropdown'

type DropdownSet = {
  sort: string
  name: string
}

const DropdownItemSet:React.FC<DropdownSet> = ({ sort, name }) => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const setHandler = () => {

    setDropdown(!dropdown)
  }

  return <li onClick={() => setHandler()}>{name}</li>
}

export default DropdownItemSet