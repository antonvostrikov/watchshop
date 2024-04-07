import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hook'
import { Link } from 'react-router-dom'
import { getAccessoriesName } from '../redux/slices/getAccessoriesSlice'

import Footer from '../components/Footer/Footer'

const Accessories:React.FC = () => {
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getAccessoriesName())
  }, [])

  const { accessoriesName } = useAppSelector(state => state.accessories)

  return (
    <>
      <section className="accessories">
        <div className="wrapper-accessories">
          <div className="container-accessories">
            <div className="wrapper-accessories__title">
              <h1>Аксессуары</h1>
            </div>
            <div className="wrapper-accessories__items">
              { accessoriesName.map(name => (
                <div className="wrapper-accessories__item" key={name.id}>
                  <span className="accessories-count">({name.count})</span> 
                  <Link to={`${name.type}`}><span className="accessories-name">{name.name}</span></Link>
                </div>
              )) }
            </div>
          </div>
        </div>    
      </section>
      <Footer />
    </>
  )
}

export default Accessories