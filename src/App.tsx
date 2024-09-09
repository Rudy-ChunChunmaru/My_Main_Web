import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Profile from "@/scenes/profile";
import Portofolio from "@/scenes/portofolio";
import Media from "@/scenes/media";
import Bottom from "@/scenes/bottom";
import ContactMe from "@/scenes/contactme";
import { useState } from "react";
import { TypeSelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<TypeSelectedPage>(
    TypeSelectedPage.Home
  );

  return (
    <div className="h-full w-full">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <Home setSelectedPage={setSelectedPage} />

      <Profile setSelectedPage={setSelectedPage} />

      <Portofolio setSelectedPage={setSelectedPage} />

      <Media setSelectedPage={setSelectedPage} />

      <Bottom />
    </div>
  );
}

export default App;
