import "../styles/ExperimentSlidingPane.scss";
import ExperimentForm from "../pages/ExperimentForm"
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function ExperimentSlidingPane(props) {

    return (
        <SlidingPane
            className="experiment-pane"
            isOpen={props.panelOpen}
            onRequestClose={props.closePanel}
            title="Create an Experiment"
        >
            <ExperimentForm addNode={props.addNode} closePanel={props.closePanel} />
        </SlidingPane>
    );
};
