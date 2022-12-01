import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import Landing from "./pages/Landing"
import ExperimentForm from "./pages/ExperimentForm"
import Tree from "./pages/Tree"
import Roadmap from "./pages/Roadmap"

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/experiment" element={<ExperimentForm />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
