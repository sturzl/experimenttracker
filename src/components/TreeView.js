import Tree from 'react-d3-tree';
import React  from 'react';

import '../styles/TreeView.scss'


function RenderCustomNode({nodeDatum, toggleNode, foreignObjectProps}) {

return (
<g>
  <svg x="-50">
  <rect fill="lightgrey" width="100" height="100" onClick={toggleNode}/>
  <text fill="black">
    <tspan x="10" y="45">{nodeDatum.name}</tspan>
    {nodeDatum.children &&  <tspan x="10" y="70">{nodeDatum.children.length}</tspan>}
  </text>
  <foreignObject {...foreignObjectProps}>
  <button style={{width: "100%", top:"50px"}} onClick={addNode}>
    <tspan>ADD</tspan>
  </button>
</foreignObject>
  </svg>


</g>
)
}



function addNode() {

}

export default function TreeView(data) {
  const nodeSize = { x: 100, y: 100 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, showModal: false};


  return (
    <div className='tree-container'>
      <Tree data={data} 
        orientation="vertical" 
        renderCustomNodeElement={(rd3tProps) => RenderCustomNode({...rd3tProps, foreignObjectProps, addNode})} 
        zoomable="false"
        translate={{x: 500, y:50}}/>
    </div>
  );
}


