import { useState } from "react";

export default function Demo() {
  // const [expanded, setExpanded] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const handleButtonClick = () => {
    setTimeout(() => {
      setVideoVisible(true);
    }, 500); // Match this delay with the CSS transition time
  };
  return (
    <div className="demoContainer">
      <button id="demoButton" onClick={handleButtonClick}>
        View Demo
      </button>

      <div id="videoContainer" className={videoVisible ? "visible" : ""}>
        <video controls></video>
      </div>
    </div>
  );
}
