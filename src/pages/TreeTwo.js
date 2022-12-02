import '../styles/TreeTwo.scss';
import TreeView from '../Component/TreeView'
import { useState } from 'react';

export default function TreeTwo(props) {

  const [experimentType, setExperimentType] = useState("transactional");
  const [displayedNode, setDisplayedNode] = useState(props.rootNodeName);

  const changeExperimentType = (event) => {
    if(event.target.value === "root"){
      setExperimentType("root");
      setDisplayedNode(props.rootNodeName);
    } else {
      setExperimentType(event.target.value);
      setDisplayedNode(event.target.value);
    }
  };

  return (<>
    <div className='page-header'>
      <h1 className="page-title">Tree Two</h1>
      <div className="button-container">
        <button className="create-experiment-button" onClick={props.openPanel}>Create Experiment</button>
      </div>
    </div>
    <div className='tree-two'>
      <label className='experiment-type-select-label'>
        Experiment Type
        <select className={"experiment-type-select"} value={experimentType} onChange={changeExperimentType}>
          <option value="wizardofoz">Wizard of Oz</option>
          <option value="transactional">Transactional</option>
          <option value="paperprototype">Paper prototype</option>
          <option value="root">Root</option>
        </select>
      </label>

      {TreeView(props.nodes[displayedNode])}
    </div>
  </>)
}