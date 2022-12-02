import './styles/App.scss';
import { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header"
import Landing from "./pages/Landing"
import Tree from "./pages/Tree"
import TreeTwo from "./pages/TreeTwo"
import Roadmap from "./pages/Roadmap"
import ExperimentSlidingPane from "./components/ExperimentSlidingPane"

const data = {
  "name": "Product",
  "children": [
    {
      "name": "Outcome 1"
    },
    {
      "name": "Outcome 2",
      "children": [
        {
          "name": "Opp"
        },
        {
          "name": "Opp",
          "children": [{
            "name": "Solution 1",
            "children": [{ "name": "experiment" }, { "name": "experiment" }]
          }, {
            "name": "Solution 2",
            "children": [{ "name": "experiment" }]
          }]
        },
        {
          "name": "Opp"
        },
      ]
    },
    {
      "name": "Outcome 3"
    },
  ]
};

function App() {

  const [nodes, setNodes] = useState({
     "my mother got married in pants": data,
     "wizardofoz": {name: "wizardofoz", children: []} ,
     "transactional": {name: "transactional", children: []} ,
     "paperprototype": {name: "paperprototype", children: []},
     "outcome": {name: "outcome", children: []} ,
     "vision": {name: "vision", children: []} ,
     "experiment": {name: "experiment", children: []} 
    });

  const [activeNode, setActiveNode] = useState({ name: "my mother got married in pants" });
  const [rootNode, setRootNode] = useState("my mother got married in pants");

  const [panelOpen, setPanelOpen] = useState(false);

  const openPanel = () => setPanelOpen(true);
  const closePanel = () => setPanelOpen(false);

  const addNode = (formData) => {
    if (rootNode === "") {
      addFirstNode(formData);
    } else {
      addChildNode(formData, activeNode.name);
    }
  };

  const addFirstNode = (node) => {
    setRootNode(node.id);
    const map = {};
    map[node.id] = node;
    setNodes(map);
  }

  const addNodeToMainTree = (node, parentId, map) => {
    const parent = map[parentId];
    const updatedChildren = [...parent.children, node];
    const updatedParent = { ...parent, children: updatedChildren };
    const updatedMap = { ...map };
    updatedMap[parentId] = updatedParent;
    return updatedMap
  }

  const addNodeToExperimentTypeList = (node, map) => {
    const updatedMap = { ...map };
    if (!updatedMap[node.type]) {
      updatedMap[node.type] = { name: node.type, children: [] }
    }
    const experimentTypeNode = updatedMap[node.type];
    const updatedChildren = [...experimentTypeNode.children, node];
    updatedMap[node.type] = { ...experimentTypeNode, children: updatedChildren };
    return updatedMap;
  };

  const addNodeToNodeTypeList = (node, map) => {
    const updatedMap = { ...map };
    if (!updatedMap[node.nodetype]) {
      updatedMap[node.nodetype] = { name: node.nodetype, children: [] }
    }
    const experimentTypeNode = updatedMap[node.nodetype];
    const updatedChildren = [...experimentTypeNode.children, node];
    updatedMap[node.nodetype] = { ...experimentTypeNode, children: updatedChildren };
    return updatedMap;
  };

  const addChildNode = (node, parentId) => {
    setNodes((previousMap) => {
      console.log('previous map', previousMap);
      let updatedMap = addNodeToMainTree(node, parentId, previousMap);
      // add node by ID for subtree views
      updatedMap[node.id] = node;
      updatedMap = addNodeToExperimentTypeList(node, updatedMap);
      updatedMap = addNodeToNodeTypeList(node, updatedMap);
      console.log('updated map', updatedMap);
      return updatedMap;

    });
  };

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <ExperimentSlidingPane panelOpen={panelOpen} closePanel={closePanel} addNode={addNode} />
        <div className='main'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/tree" element={<Tree rootNode={nodes[rootNode]} setActiveNode={setActiveNode} />} />
            <Route path="/tree2" element={<TreeTwo nodes={nodes} rootNodeName={rootNode} openPanel={openPanel} />} />
            <Route path="/roadmap" element={<Roadmap openPanel={openPanel} nodes={nodes} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
