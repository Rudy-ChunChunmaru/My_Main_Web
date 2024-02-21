import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import { useState } from "react";
import { TypeSelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<TypeSelectedPage>(
    TypeSelectedPage.Home
  );

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
