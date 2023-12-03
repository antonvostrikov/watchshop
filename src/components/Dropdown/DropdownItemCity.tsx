import React from 'react'

import { DropdownContext } from './Dropdown'
import { useAppDispatch } from '../../hooks/hook'

type DropdownCity = {
  city: string
}

const DropdownItemCity:React.FC<DropdownCity> = ({ city }) => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const dispatch = useAppDispatch()

  const changeCityHandler = () => {
 

    setDropdown(!dropdown)
  }

  return <li onClick={() => changeCityHandler()}>{city}</li>
}

export default DropdownItemCity