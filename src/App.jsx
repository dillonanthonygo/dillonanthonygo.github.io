import { useState } from "react"
import "./App.css"
import { LoadingScreen } from "./components/LoadingScreen"
import "./index.css"

function App() {
  const [isLoaded, setisLoaded] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)}/>}
    </>
  );
}

export default App
