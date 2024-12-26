import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import MusicalNotes from "./MusicalNotes";
import Technology from "./Technology";
import AboutRJ from "./AboutRJ";
import Features from "./Features";

const navComponents = [
  {
    name: "About",
    border: false,
  },
  {
    name: "Features",
    border: false,
  },
  {
    name: "signup",
    border: true,
  },
  {
    name: "Try for free",
    border: true,
  },
];

function App() {
  const handleButtonClick = () => {
    // This should change the URL and redirect to /special, which Flask handles
    window.location.href = "/rj";
  };
  return (
    <div className="App">
      <NavBar
        name={"DJ Edgar"}
        components={navComponents}
        onClick={handleButtonClick}
      />
      <MusicalNotes />
      <Header />
      <Technology />
      <AboutRJ />
      <Features />
    </div>
    // </div>
  );
}
// function FadeWrapper({ children, trigger }) {
//   const [transitionStage, setTransitionStage] = useState("fadeIn");

//   useEffect(() => {
//     if (trigger) {
//       setTransitionStage("fadeOut");
//       setTimeout(() => {
//         setTransitionStage("fadeIn");
//       }, 1000); // Duration of fade-out before switching content
//     }
//   }, [trigger]);

//   return <div className={`fade-wrapper ${transitionStage}`}>{children}</div>;
// }

export default App;
