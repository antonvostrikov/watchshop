import { Link } from 'react-router-dom' 

import SmartWatch from '../../ímg/smart-watch.jpg'
import RolexWatch from '../../ímg/rolex-watch.jpg'
import CasioWatch from '../../ímg/casio-watch.jpg'
import DeliverySvg from '../../ímg/delivery.svg'
import BrandsSvg from '../../ímg/brands.svg'
import PaymentSvg from '../../ímg/payment.svg'
import ShopsSvg from '../../ímg/shops.svg'
import ClassicWatch from '../../ímg/clock-classic.jpg'
import AlarmWatch from '../../ímg/alarm.jpg'
import OldWatch from '../../ímg/old-watches.jpg'

const Landing:React.FC = () => {
  return (
    <section className="section-landing">
      <div className="container">
        <div className="section-landing__links">
          <div className="picture-link big">
            <Link to="/">
              <h2>Умные часы</h2>
              <img src={SmartWatch} alt="" />
            </Link>
          </div>
          <div className="picture-link small-top">
            <Link to="/">
              <h2>Rolex</h2>
              <img src={RolexWatch} alt="" />
            </Link>
          </div>
          <div className="picture-link small-bottom">
            <Link to="/">
              <h2>Casio</h2>
              <img src={CasioWatch} alt="" />
            </Link>
          </div>
        </div>
        <div className="section-landing__futures">
          <div className="future-landing">
            <h2>Будьте в курсе акций и последних предложений</h2>
            <form>
              <input type="text" placeholder="Введите email"/>
              <button>Подписаться</button>
            </form>
            <p>Нажимая “Подписаться”, я даю <span>согласие на обработку персональных данных</span></p>
          </div>
          <div className="future-landing">
            <img src={DeliverySvg} alt="" />
            <span>Доставка по всей России</span>  
          </div>
          <div className="future-landing">
            <img src={BrandsSvg} alt="" />
            <span>Более 100 брендов</span>  
          </div>
          <div className="future-landing">
            <img src={PaymentSvg} alt="" />
            <span>Оплата любым способом</span>  
          </div>
          <div className="future-landing">
            <img src={ShopsSvg} alt="" />
            <span>15 магазинов по всей России</span>            
          </div>
        </div>
        <div className="section-landing__snapshots">
          <div className="snapshot-landing">
            <img src={ClassicWatch} alt="" />
          </div>
          <div className="snapshot-landing">
            <img src={AlarmWatch} alt="" />
          </div>
          <div className="snapshot-landing">
            <img src={OldWatch} alt="" />
          </div>
        </div>
        <div className="section-landing__about">
          <div className="about-block">
            <h2>Интернет-магазин WatchShop основан в 2010 году</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
          </div>
          <div className="about-block">
            <h2>Оплата и возврат</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
          </div>
          <div className="about-block">
            <h2>Доставка и самовывоз</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id massa sit amet ligula congue rhoncus at et nunc. Duis bibendum in neque ut finibus. Integer accumsan blandit ex, ut iaculis quam faucibus et. Aenean suscipit et sapien eu sodales. Fusce egestas lectus et tortor tincidunt dignissim. Suspendisse mauris tortor, gravida vel tincidunt eu, interdum vel nisi. Nunc accumsan elementum.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing