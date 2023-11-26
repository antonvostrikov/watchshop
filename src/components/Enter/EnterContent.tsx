import React from 'react'

interface IEnterContentProps {
  tabSectionHandler: (index: number, className: string) => string
  tabHandler: (tab: number) => void
}

const EnterContent:React.FC<IEnterContentProps> = ({ tabSectionHandler, tabHandler }) => {
  return (
    <>
      <div className="enter-tabs">
        <span className={`${tabSectionHandler(1, 'active')}`} onClick={() => tabHandler(1)}>Войти</span>
        <span className={`${tabSectionHandler(2, 'active')}`} onClick={() => tabHandler(2)}>Зарегистрироваться</span>
      </div>
      <div className="enter-tabs__section">
        <div className={`enter-tab__section ${tabSectionHandler(1, 'active')}`}>
          <form>
            <label htmlFor="">Телефон*</label>
            <input 
              type="text" 
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+7(___)___-__-__" 
              required 
            />
            <button>Получить код</button>
          </form>
        </div>
        <div className={`enter-tab__section ${tabSectionHandler(2, 'active')}`}>
          <form>
            <label htmlFor="">Телефон*</label>
            <input 
              type="text" 
              pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
              placeholder="+7(___)___-__-__" 
              required 
            />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Имя</label>
            <input type="text" name="" id="" />
            <button>Зарегистрироваться</button>
          </form>
        </div>
      </div>  
    </>
  )
}

export default EnterContent