import React from 'react'

import useDropdown from '../../hooks/useDropdown'

type DropdownContextType = {
  dropdown: boolean
  setDropdown: (dropdown: boolean) => void
}

export const DropdownContext = React.createContext<DropdownContextType>({
  dropdown: false,
  setDropdown: () => {}
})

const Dropdown:React.FC<any> = ({children}) => {
  const { setDropdown, dropdown, dropdownRef } = useDropdown()

  return (
    <DropdownContext.Provider value={{dropdown, setDropdown}}>
      <div className="dropdown" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

export default Dropdown