import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-img-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-lg"
      />
    </div>
  </div>
)
export default Home
