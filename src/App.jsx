import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [entered, setEntered] = useState(false);

  return entered ? <Dashboard /> : <Landing onEnter={() => setEntered(true)} />;
}

export default App;
