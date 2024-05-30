import { useState } from "react";
import { Link } from "react-router-dom";


function Backside() {
  const [confetti, setConfetti] = useState(false);
  return (
    <div className="container c-grad2">
      {[...Array(20).keys()].map((i) => (
        <div key={i} className={confetti && "confetti"} />
      ))}
        <div className="main-container">
          <h3>I Love you to the 🌔 and back!</h3>
          <div className="card">
              {[...Array(20).keys()].map((i) => (
                <div key={i} className={confetti && "confetti"} />
              ))}

            <h3>Happy Birthday!</h3>
            <button
              className="btn-grad"
              onClick={() => {
                  setConfetti(!confetti)}}>Click Me!</button>

                  {[...Array(20).keys()].map((i) => (
                    <div key={i} className={confetti && "confetti"} />
                  ))}
            <p>You are most definitely my favorite person on the planet</p>
            <button className="btn-grad">
              <Link to="/">Go Back ⬅️ </Link></button>
          </div>
        </div>
    </div>
  )
}

export default Backside;