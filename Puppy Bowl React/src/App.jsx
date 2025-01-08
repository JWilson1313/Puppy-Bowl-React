import AllPlayer from "./Components/AllPlayers";
import NavBar from "./Components/Navbar";
import NewPlayerForm from "./Components/NewPlayerForm";
import SinglePlayer from "./Components/SInglePlayer";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <route path="/" element={<AllPlayers />} />
          <Route path="/players/:id element={<SinglePlayer />}" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
