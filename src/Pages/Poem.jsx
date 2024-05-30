import { Link } from "react-router-dom";
import { useState } from "react"
import mySound from "../assets/Beacons.mp3"
function PoemPage() {
  const audio = document.getElementById("audio_tag");
  const [play, setPlay] = useState(false);

    const Playit = () => {
      setPlay(true);
    };
    const Stopit = () => {
      setPlay(false);
    };

  return(
    <>
      <div className="container-grad">
          <div className="h-container">
          <button className="btn-grad" href="/backside">
            <Link to="/">back</Link>
          </button>

          <button 
            className="btn-grad" 
            onClick={() => {
              play ? setPlay(false) : setPlay(true);
              play ? audio.pause() : audio.play();
            }}
            >Play</button>
        </div>
          <h1>Beacons</h1>
              <p> I feel like I’ve lost all the words I should say </p>
              <p> This is foreign to me, I don’t know what I should think </p>
              <p> As I lay in my bed my memories fill my head </p>
              <p> And I wonder if this is destiny </p>
              <br />
              <p> I feel so electric, it runs through my veins </p>
              <p> You’re so majestic, the one who remains </p>
              <p> There is so much at stake, that my knees start to shake </p>
              <p> I know that this is our destiny </p>
              <br />
              <p> Light me on fire, be my light in the dark </p>
              <p> Be the one I admire, in a flood be my arc </p>
              <p> Like a lighthouse at sea, be a beacon for me </p>
              <p> Promise to be my everything </p>
              <p> A dam on a river, I’ll hold back your pain </p>
              <p> An unbreakable chain, I swear I’ll contain </p>
              <p> Anything that would hurt you, won’t get near you again </p>
              <p> Promise I’ll be your everything </p>
              <br />
              <p> Speak anything, I’ll bring it to be </p>
              <p> I’ll move mountains, or part the whole sea </p>
              <p> Whatever you want, just tell it to me </p>
              <p> I will make it happen, most sincerely </p>
              <p> There is nothing on earth, that is too good for you </p>
              <p> I would rip out my heart, if it took that to prove </p>
              <p> I’m here forever, to be together </p>
              <p> In this endeaver, there will be no surrender </p>
              <br />
              <p> Light me on fire, be my light in the dark </p>
              <p> Be the one I admire, in a flood be my arc </p>
              <p> Like a lighthouse at sea, be a beacon for me </p>
              <p> Promise to be my everything </p>
              <p> A dam on a river, I’ll hold back your pain </p>
              <p> An unbreakable chain, I swear I will contain </p>
              <p> Anything that would hurt you, won’t get near you again </p>
              <p> Promise I’ll be your everything </p>
              <br />
              <p> Like an endless ocean, </p>
              <p> I get lost in the green of your eyes </p>
              <p> I can’t name a thing </p>
              <p> That I want in my life </p>
              <p> Just say you’ll be mine </p>
              <br />
              <p> Light me on fire, be my light in the dark </p>
              <p> Be the one I admire, in a flood be my arc </p>
              <p> Like a lighthouse at sea, be a beacon for me </p>
              <p> Promise to be my everything </p>
              <p> A dam on a river, I’ll hold back your pain </p>
              <p> An unbreakable chain, I swear I’ll contain </p>
              <p> Anything that would hurt you, won’t get near you again </p>
              <p> Promise I’ll be your everything </p>
              <br />       
      </div>
      <audio id="audio_tag" src={mySound} type="audio/mpeg" />
    </>
  )
}

export default PoemPage;