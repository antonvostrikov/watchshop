import React from 'react'

const ClickOutsideHook = (callback: () => void) => {
  const ref = React.useRef<HTMLUListElement>(null)

  React.useEffect(() => {
    const clickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    
    document.addEventListener('mousedown', clickOutside);

    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [callback])

  return ref
}

export default ClickOutsideHook