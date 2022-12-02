import TreeView from '../Component/TreeView'


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
                "name" : "Solution 1",
                "children": [{"name": "experiment"}, {"name": "experiment"}]
            },{
                "name" : "Solution 2",
                "children": [{"name": "experiment"}]
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
  }

export default function Tree() {
    return (<><h1 className="page-title">Tree</h1>
{TreeView(data)}
</>)
}