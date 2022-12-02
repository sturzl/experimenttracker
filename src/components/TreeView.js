import Tree from 'react-d3-tree';
import React  from 'react';

import '../styles/TreeView.scss'


function RenderCustomNode({nodeDatum, toggleNode, foreignObjectProps}) {

return ( <g>
  <foreignObject {...foreignObjectProps}>
  <div className='node'> 
    <h1 style={{textAlign:"center"}}>{nodeDatum.name}</h1>
    {nodeDatum.children && 
    <><h3>{nodeDatum.children.length}</h3>
    <button width="100%" onClick={toggleNode}>
    {nodeDatum.__rd3t.collapsed ? "Open" : "Close"}
      </button></>}
    </div>
  </foreignObject>
</g>)
}

export default function TreeView(data) {
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, showModal: false};


  return (
    <div className='tree-container'>
      <Tree data={data} 
        orientation="vertical" 
        renderCustomNodeElement={(rd3tProps) => RenderCustomNode({...rd3tProps, foreignObjectProps})} 
        zoomable="false"
        translate={{x: 500, y:50}}/>
    </div>
  );
}


