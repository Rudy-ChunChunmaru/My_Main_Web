import { Index } from "@/scenes/index";
import { IndexPage } from "@/pages/index";

function App() {
  return (
    <div className="w-[100%] h-[100%]">
     { true && <Index /> }
     { false && <IndexPage /> }
    </div>
  ) 
}

export default App;