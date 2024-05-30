import { useState } from "react";

import "../container.css"

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
              <div className={confetti && "confetti"} />
              <div className={confetti && "confetti"} />
              <div className={confetti && "confetti"} />

            <h2>Happy Birthday!</h2>
            <button
              className="btn-grad"
              onClick={() => {
                  setConfetti(!confetti)}}>Click Me!</button>

                  <div className={confetti && "confetti"} />
                  <div className={confetti && "confetti"} />
                  <div className={confetti && "confetti"} />
                  <div className={confetti && "confetti"} />
                  <div className={confetti && "confetti"} />
            <p>You are most definitely my favorite person on the planet</p>
          </div>
        </div>
    </div>
  )
}

export default Backside;