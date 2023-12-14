import React from 'react'

import { DropdownContext } from './Dropdown'
import { useAppDispatch } from '../../hooks/hook'

type DropdownCity = {
  id: number
  city: string
  relevantID: number
}

const DropdownItemCity:React.FC<DropdownCity> = () => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const dispatch = useAppDispatch()
  
  const changeCityHandler = () => {

    setDropdown(!dropdown)
  }

  return <li onClick={() => changeCityHandler()}></li>
}

export default DropdownItemCity