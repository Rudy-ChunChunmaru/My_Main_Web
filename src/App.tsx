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

      <div id="home" className="my-96">
        home
      </div>

      <div id="profile" className="my-96">
        profile
      </div>

      <div id="portofolio" className="my-96">
        portofolio
      </div>
    </div>
  );
}

export default App;
