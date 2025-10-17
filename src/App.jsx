import { useState } from "react"
import "./App.css"
import { LoadingScreen } from "./components/LoadingScreen"
import "./index.css"
import { Navbar } from "./components/Navbar"

function App() {
  const [isLoaded, setisLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)}/>}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-white text-black-100`}>
          <Navbar />

        </div>

    </>
  );
}

export default App
