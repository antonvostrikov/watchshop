const useTransformPrice = (price: number) => {
  const stringPrice = price.toString()

  if (stringPrice.length === 6) {
    return `${stringPrice.slice(0, 3)} ${stringPrice.slice(3)} Р`
  } else if (stringPrice.length === 5) {
    return `${stringPrice.slice(0, 2)} ${stringPrice.slice(2)} Р`
  }
}

export default useTransformPrice