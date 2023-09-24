import React from "react";

import Menu from "../components/Menu/Menu";
import Footer from "../components/Footer/Footer";
import FilterItems from "../components/FilterItems/FilterItems";
import WatchBlock from "../components/WatchBlock/WatchBlock";

import { useAppDispatch } from "../hooks/hook";
import { getPremiumWatches } from "../redux/slices/getWatchesSlice";

const PremiumWatches: React.FC = () => { 
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(getPremiumWatches())
  }, [])

  return (
    <>
      <Menu />
      <section className="watches">
        <div className="wrapper-watches">
          <div className="container-watches">
            <div className="wrapper-watches__title">
              <h1>премиум часы</h1>
            </div>
            <FilterItems />
            <WatchBlock />
          </div>       
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PremiumWatches