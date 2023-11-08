import React from 'react'

import { DropdownContext } from './Dropdown'
import { useAppDispatch } from '../../hooks/hook'
import { changeMainCity } from '../../redux/slices/citySlice'

type DropdownCity = {
  id: number
  city: string
}

const DropdownItemCity:React.FC<DropdownCity> = ({ id, city }) => {
  const { setDropdown, dropdown } = React.useContext(DropdownContext)

  const dispatch = useAppDispatch()
  
  const changeCityHandler = () => {
    
    dispatch(changeMainCity({id, city}))
    setDropdown(!dropdown)
  }

  return <li onClick={() => changeCityHandler()}>{city}</li>
}

export default DropdownItemCity