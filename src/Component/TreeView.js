import Tree from 'react-d3-tree';
import './TreeView.css'

const renderCustomNode = ({nodeDatum, toggleNode, foreignObjectProps}) => (
  <g>
    <foreignObject {...foreignObjectProps}>
      {nodeDatum.childern && (<button style={{border: "1px solid black"}}>
        <h3 style={{textAlign:"center"}}>{nodeDatum.name}</h3>
        </button>)}
        {!nodeDatum.childern && (
          <div style={{border: "1px solid black"}}>
        <h3 style={{textAlign:"center"}}>{nodeDatum.name}</h3>
      </div>
        )}
      

    </foreignObject>
  </g>
);

export default function TreeView(data) {
  const nodeSize = { x: 200, y: 200 };
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

  return (
    <div className='tree'>
      <Tree data={data} renderCustomNodeElement={(rd3tProps) => renderCustomNode({...rd3tProps, foreignObjectProps})} />
    </div>
  );
}


