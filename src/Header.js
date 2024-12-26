import EqualizerBars from "./EqualizerBars";
import Signup from "./Signup";

export default function Header() {
  return (
    <div className="header">
      <div className="header-item">
        <h1> Introducing DJ Edgar: Your Retro-Futuristic Music Maestro</h1>
        <p> Experience AI Radio Jockey Like Never Before</p>
        <Signup />
      </div>
      <div>
        {/* <img src="Edgar.png" alt="" /> */}

        <EqualizerBars />
      </div>
    </div>
  );
}
