import { useState } from "react";

function Backside() {
  const [confetti, setConfetti] = useState(false);
  return (
    <div className="container c-grad2">
      {[...Array(20).keys()].map((i) => (
        <div key={i} className={confetti && "confetti"} />
      ))}
        <div className="main-container">
          <h1>I Love you to the 🌔 and back!</h1>
          <div className="card">
              {[...Array(20).keys()].map((i) => (
                <div key={i} className={confetti && "confetti"} />
              ))}

            <h2>Happy Birthday!</h2>
            <button
              className="btn-grad"
              onClick={() => {
                  setConfetti(!confetti)}}>Click Me!</button>

                  {[...Array(20).keys()].map((i) => (
                    <div key={i} className={confetti && "confetti"} />
                  ))}
            <p>You are most definitely my favorite person on the planet</p>
            <button
              className="btn-grad"
              onClick={() => {
                  setConfetti(!confetti)}}>Go Back ⬅️</button>
          </div>
        </div>
    </div>
  )
}

export default Backside;