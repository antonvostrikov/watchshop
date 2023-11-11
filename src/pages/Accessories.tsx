import React from 'react'

import Menu from '../components/Menu/Menu'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Accessories:React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <>
      <Menu />
      <section className="accessories">
        <div className="wrapper-accessories">
          <div className="container-accessories">
            <div className="wrapper-accessories__title">
              <h1>Аксессуары</h1>
            </div>
            <div className="wrapper-accessories__items">
              
                <div className="wrapper-accessories__item">
                  <span className="accessories-count"></span> 
                  <span className="accessories-name"></span>
                </div>
              
            </div>
          </div>
        </div>    
      </section>
      <Footer />
    </>
  )
}

export default Accessories