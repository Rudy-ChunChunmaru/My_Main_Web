import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Profile from "@/scenes/profile";
import { useState } from "react";
import { TypeSelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<TypeSelectedPage>(
    TypeSelectedPage.Home
  );

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage} />

      <Profile setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
