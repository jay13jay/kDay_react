import { Link } from "react-router-dom";


function HomePage() {
  return(
    <div className="container">
      <div className="c-grad2">
        <h1>Happy Birthday!</h1>
        <p>I hope it's the bestest birthday ever!</p>
        <p>🎂 💚 💚 💚 🎂</p>

        <button href="/backside">
          <Link to="/backside">Click Me!</Link>
        </button>
      </div>
    </div>
  )
}

export default HomePage;