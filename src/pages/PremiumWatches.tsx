import React from "react";

import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import FilterItems from "../components/FilterItems/FilterItems";
import WatchBlock from "../components/WatchBlock/WatchBlock";

import { useAppDispatch, useAppSelector } from "../hooks/hook";
import { getPremiumWatches } from "../redux/slices/getWatchesSlice";

const PremiumWatches: React.FC = () => { 
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getPremiumWatches())
  }, [])

  const {premiumWatches, status} = useAppSelector(state => state.watches)

  const brandsListWatches: string[] = []
  const countriesListWatches: string[] = []

  premiumWatches.map(premium => {
    brandsListWatches.push(premium.brand)
    countriesListWatches.push(premium.country)
  })

  const brandsListFilter = Array.from(new Set([...brandsListWatches]))
  const countriesListFilter = Array.from(new Set([...countriesListWatches]))

  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>премиум часы</h1>
            </div>
            <FilterItems brands={brandsListFilter} countries={countriesListFilter} />
            <WatchBlock watches={premiumWatches} status={status}/>
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PremiumWatches