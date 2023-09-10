import React from 'react'
import { Link } from 'react-router-dom'

import CityArrowSvg from '../../ímg/city-arrow.svg'
import VkSvg from '../../ímg/vk.svg'
import YouTubeSvg from '../../ímg/youtube.svg'
import InstagramSvg from '../../ímg/instagram.svg'
import FacebookSvg from '../../ímg/facebook.svg'

const Footer: React.FC = () => {
  return (
    <footer className="footer-bottom">
      <div className="container-footer">
        <div className="footer-menu">
          <div className="catalog">
            <div className="catalog__inner">
              <h3>Каталог</h3>
              <ul>
                <li>
                  <Link to="/">Наручные часы</Link>
                </li>
                <li>
                  <Link to="/">Интерьерные</Link>
                </li>
                <li>
                  <Link to="/">Rolex</Link>
                </li>
                <li>
                  <Link to="/">Casio</Link>
                </li>
                <li>
                  <Link to="/">Аксессуары</Link>
                </li>
                <li>
                  <Link to="/">Бренды</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-company">
            <div className="about-company__inner">
              <h3>О компании</h3>
              <ul>
                <li>
                  <Link to="/">Новости</Link>
                </li>
                <li>
                  <Link to="/">Подписка</Link>
                </li>
                <li>
                  <Link to="/">Скидки</Link>
                </li>
                <li>
                  <Link to="/">Контакты</Link>
                </li>
                <li>
                  <Link to="/">Франшиза</Link>
                </li>
                <li>
                  <Link to="/">Карьера</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="for-buyers">
            <div className="for-buyers__inner">
              <h3>Покупателям</h3>
              <ul>
                <li>
                  <Link to="/">Скидки</Link>
                </li>
                <li>
                  <Link to="/">Блог</Link>
                </li>
                <li>
                  <Link to="/">Частые вопросы</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="our-work">
            <div className="our-work__inner">
              <h3>Как мы работаем</h3>
              <ul>
                <li>
                  <Link to="/">Заказ</Link>
                </li>
                <li>
                  <Link to="/">Доставка</Link>
                </li>
                <li>
                  <Link to="/">Гарантия</Link>
                </li>
                <li>
                  <Link to="/">Возврат</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-connection">
          <div className="connect-us">
            <h3>Свяжитесь с нами</h3>
            <div className="connect-us__phone">
              <span> 8 (800) 000-00-00</span>
              <span>Бесплатный звонок по РФ</span>
            </div>
            <div className="connect-us__phone">
              <span>Москва <img src={CityArrowSvg} /></span>
              <span>8 (495) 000-00-00</span>
            </div>
            <div className="connect-us__visiting">
              <span>Часы работы</span>
              <span>8:00 - 22:00 МСК</span>
              <button><a href="/">Задать вопрос</a></button>
            </div>
          </div>
          <div className="social-network">
            <h3>Мы в социальных сетях</h3>
            <ul>
              <li>
                <Link to="/"><img src={VkSvg} alt="vk" /></Link>
              </li>
              <li>
                <Link to="/"><img src={YouTubeSvg} alt="youtube" /></Link>
              </li>
              <li>
                <Link to="/"><img src={InstagramSvg} alt="instagram" /></Link>
              </li>
              <li>
                <Link to="/"><img src={FacebookSvg} alt="facebook" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© WatchShop 2010 - 2023</p>
      </div>
    </footer>
  )
}

export default Footer