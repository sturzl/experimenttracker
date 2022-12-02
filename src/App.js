import './styles/App.scss';
import {useState, useEffect} from 'react';
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

  const initialGlobalState = {experiments: []}

  const [globalState, setGlobalState] = useState(initialGlobalState);

  useEffect(() => {
    console.log('globalState update', globalState)
  }, [globalState]);

  const addExperiment = (form) => {
    console.log('props form data', form);
    
    setGlobalState(
      (prev) => {
        return {...prev, experiments: [...prev.experiments, form]}
      }
    );
  };

  return (
      <div className='app'>
        <BrowserRouter>
          <Header />
          <div className='main'>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/experiment" element={<ExperimentForm addExperiment={addExperiment} />} />
              <Route path="/tree" element={<Tree />} />
              <Route path="/roadmap" element={<Roadmap />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  )
}

export default App;
