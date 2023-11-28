import React from 'react'
import Landing from '../components/Landing/Landing'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

const Main: React.FC = () => {
  return (
    <div className="wrapper">
      <Landing />
      <Footer />
    </div>
  )
}

export default Main