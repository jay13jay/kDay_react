import { Link } from "react-router-dom";


function HomePage() {
  return(
    <div className="container">
      <div className="c-grad2">
        <h1>Happy Birthday, Kristan!</h1>
        <p>I hope its the bestest birthday ever!</p>
        <p>🎂 💚 💚 💚 🎂</p>

          <div className="container">
          <button className="btn-grad" href="/backside">
            <Link to="/backside">Flip to Back!</Link>
          </button>
          <button className="btn-grad" href="/backside">
            <Link to="/poems">Beacons 📝</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;