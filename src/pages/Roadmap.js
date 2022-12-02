import '../styles/Roadmap.scss';

export default function Roadmap(props) {

  console.log(props.nodes["outcome"]);

  const experiments = props.nodes["experiment"].children.map((experiment, index) => {
    return (
        <div key={index} className="experiment-label" >{experiment.name}</div>
    );
  });

  const outcomes = props.nodes["outcome"].children.map((outcome, index) => {
    return (
      <div className='outcome-wrapper'>
        <div key={index} className="outcome-label" >{outcome.name}</div>
        <div className='outcome-body'>{experiments}</div>
      </div>
    );
  });



  return (<>
    <div className='page-header'>
      <h1 className="page-title">Roadmap</h1>
      <div className="button-container">
        <button className="create-experiment-button" onClick={props.openPanel}>Create Experiment</button>
      </div>
    </div>
    <div className="tree-two">
      <div>
        <h3>Outcomes</h3>
        {outcomes}
      </div>
    </div>
  </>)
}