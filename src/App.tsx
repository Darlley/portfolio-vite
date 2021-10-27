import Home from "./pages/Home"
import { BrowserRouter, Route , Switch} from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
