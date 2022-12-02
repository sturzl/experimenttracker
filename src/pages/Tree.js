import TreeView from '../components/TreeView';
export default function Tree(props) {

  return (<>
    <h1 className="page-title">Tree</h1>
    {TreeView(props.rootNode)}
  </>)
}