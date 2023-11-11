import React from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

const Covers:React.FC = () => {
  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>Чехлы</h1>
            </div>
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Covers