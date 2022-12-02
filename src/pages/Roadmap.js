import '../styles/Roadmap.scss';

export default function Roadmap(props) {
    return (<>
        <div className='page-header'>
            <h1 className="page-title">Roadmap</h1>
            <div className="button-container">
                <button className="create-experiment-button" onClick={props.openPanel}>Create Experiment</button>
            </div>
        </div>
    </>)
}