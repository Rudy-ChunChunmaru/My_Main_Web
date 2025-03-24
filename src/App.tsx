import { Index } from "@/scenes/index";
import { IndexPage } from "@/pages/index";

function App() {

  return (
    <div className="w-[100%] h-[100%]">
       { false && <Index /> }
       { true && <IndexPage /> }
    </div>
  )
}

export default App;