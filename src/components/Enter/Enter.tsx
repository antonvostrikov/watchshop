import React from "react";

import CloseSvg from '../../ímg/close.svg'

const Enter:React.FC = () => {
  const [tab, setTab] = React.useState(1)

  const toggleTabSection = (index: number, className: string) => {
    return tab === index ? className : ""
  }

  return (
    <div className="popup-enter">
      <div className="popup-enter__wrapper">
        <div className="popup-title">
          <h2>Войти или зарегистрироваться</h2>
        </div>
        <div className="popup-tabs">
          <span onClick={() => setTab(1)}>Войти</span>
          <span onClick={() => setTab(2)}>Зарегистрироваться</span>
        </div>
        <div className="popup-tabs__section">
          <div className={`tab-section ${toggleTabSection(1, 'active')}`}>
            1
          </div>
          <div className={`tab-section ${toggleTabSection(2, 'active')}`}>
            2
          </div>
        </div>
        <div className="popup-close">
          <span><img src={CloseSvg} alt="" /></span>
        </div>
      </div>
    </div>
  )
}

export default Enter