import React from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import { useAppDispatch, useAppSelector } from '../hooks/hook'
import WatchBlock from '../components/WatchBlock/WatchBlock'

const Belts:React.FC = () => {
  const dispatch = useAppDispatch()
 
  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>ремни</h1>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />  
    </> 
  )
}

export default Belts