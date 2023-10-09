import React from 'react'

const useDropdown = () => {
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const [dropdown, setDropdown] = React.useState(false)

  const dropdownHandler = (event: MouseEvent) => {
    if (dropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdown(false)
    }
  }

  document.addEventListener('mousedown', dropdownHandler)

  return {
    dropdown,
    dropdownRef,
    setDropdown
  }
}

export default useDropdown