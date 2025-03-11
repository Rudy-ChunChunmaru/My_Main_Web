import { Route, Routes } from "react-router-dom";
import { Index } from "@/scenes/index";

function App() {
  return (
    <div className="w-[100%] h-[100%]">
      <Routes>
        <Route key="0" path="my_main_web" element={<Index />} />
      </Routes>
    </div>
  ) 
}

export default App;