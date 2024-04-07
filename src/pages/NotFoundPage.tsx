import { Link } from "react-router-dom"
import Footer from "../components/Footer/Footer"

const NotFoundPage:React.FC = () => {
  return (
    <>
      <section className="section-notfound">
        <div className="container-notfound">
          <div className="notfound-block">
            <h1>404</h1>
            <p>Страница не найдена.</p>
            <Link to="/">На главную странцу</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default NotFoundPage