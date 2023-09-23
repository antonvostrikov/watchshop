import React from "react";

import CloseSvg from '../../ímg/close.svg'

type EnterProps = {
  popup: boolean
  closePopup: () => void
}

const Enter:React.FC<EnterProps> = ({ popup, closePopup }) => {
  const [tab, setTab] = React.useState(1)

  const toggleTabSection = (index: number, className: string) => {
    return tab === index ? className : ""
  }  

  return (
    <div className={popup ? 'popup-wrapper active' : 'popup-wrapper'} onClick={() => closePopup()}>
      <div className="popup-enter" onClick={(e) => e.stopPropagation()}>
        <div className="popup-enter__wrapper">
          <div className="popup-title">
            <h2>Войти или создать профиль</h2>
          </div>
          <div className="popup-tabs">
            <span className={`${toggleTabSection(1, 'active')}`} onClick={() => setTab(1)}>Войти</span>
            <span className={`${toggleTabSection(2, 'active')}`} onClick={() => setTab(2)}>Зарегистрироваться</span>
          </div>
          <div className="popup-tabs__section">
            <div className={`tab-section ${toggleTabSection(1, 'active')}`}>
              <form>
                <label htmlFor="">Телефон*</label>
                <input type="text" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
          placeholder="+7(___)___-__-__" required />
                <button>Получить код</button>
              </form>
            </div>
            <div className={`tab-section ${toggleTabSection(2, 'active')}`}>
              <form>
                <label htmlFor="">Телефон*</label>
                <input type="text" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
          placeholder="+7(___)___-__-__" required />
                <label htmlFor="">Email</label>
                <input type="email" />
                <label htmlFor="">Имя</label>
                <input type="text" name="" id="" />
                <button>Зарегистрироваться</button>
              </form>
            </div>
          </div>
          <div className="popup-close">
            <span onClick={() => closePopup()}><img src={CloseSvg} alt="" /></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enter