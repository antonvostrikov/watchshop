import React from 'react'

const useTransformPrice = (price: string) => {
  const [transformPrice, setTransformPrice] = React.useState<string>(price)

  React.useEffect(() => {
    if (price.length === 6) {
      setTransformPrice(`${price.slice(0, 3)} ${price.slice(3)} Р`)
    } else if(price.length === 5) {
      setTransformPrice(`${price.slice(0, 2)} ${price.slice(2)} Р`)
    } else {
      setTransformPrice(`${price.slice(0, 1)} ${price.slice(1, 4)} ${price.slice(4, 7)}`)
    }
  }, [price])

  return {
    transformPrice
  }
}

export default useTransformPrice