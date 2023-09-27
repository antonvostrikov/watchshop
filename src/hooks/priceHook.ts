const transformPrice = (price: string) => {
  if (price.length === 6) {
    return price.slice(0, 3) + " " + price.slice(3) + " Р"
  } else if (price.length === 5) {
    return price.slice(0, 2) + " " + price.slice(2) + " Р"
  }
}

export default transformPrice