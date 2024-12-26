import { useState, useEffect } from "react";

export default function EqualizerBars() {
  const [bars, setBars] = useState([]);
  useEffect(() => {
    const randomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };
    const barCount = 20;
    const maxHeight = 200;

    const generatedBars = Array.from({ length: 20 }).map((_, i) => {
      const height =
        maxHeight * (1 - Math.abs((i - barCount / 2) / (barCount / 2)));
      console.log(height);
      return {
        id: i,
        height: `${height}px`,
        animationDuration: `${Math.random() * 0.3 + 0.7}s`, // Duration between 1s and 2s
        animationDelay: `${Math.random() * 0.5}s`, // Delay between 0s and 0.5s
        backgroundColor: randomColor(),
      };
    });
    setBars(generatedBars);
  }, []);
  return (
    <div className="equalizerBars">
      {bars.map((bar) => (
        <div
          key={bar.id}
          className="equalizerBar"
          style={{
            animationDuration: bar.animationDuration,
            animationDelay: bar.animationDelay,
            backgroundColor: bar.backgroundColor,
            height: bar.height,
          }}
        ></div>
      ))}
    </div>
  );
}
