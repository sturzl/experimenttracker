import { useForm } from "react-hook-form";
import '../styles/ExperimentForm.scss';

export default function ExperimentForm(props) {
    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    const onSubmit = (data) => {
        data.id = crypto.randomUUID();
        data.children = [];
        props.addNode(data);
        props.closePanel();
    };

    const onRadioClick = (event) => {
        event.currentTarget.classList.toggle('selected');
    }

    const currentStatusDropdownValue = watch("status", "new");
    const currentTypeDropdownValue = watch("nodetype", "experiment");

    const getStatusDropdownColorClass = () => {
        switch (currentStatusDropdownValue) {
            case 'new':
                return 'new';
            case 'in progress':
                return 'inProgress';
            case 'complete':
                return 'complete';
            default:
                return 'noStatus';
        }
    }

    const getTypeDropdownColorClass = () => {
        switch (currentTypeDropdownValue) {
            case 'vision':
                return 'new';
            case 'experiment':
                return 'inProgress';
            case 'outcome':
                return 'complete';
            default:
                return 'noStatus';
        }
    }

    const selectedRiskValue = watch("risk", "");

    const getRiskRadioClass = (thisRadio) => {
        const isActive = thisRadio === selectedRiskValue;
        return isActive ? "selected" : "";
    }

    return (<>
        <div className="experiment-form">
            {props.parentNodeName && <h2>Parent node: {props.parentNodeName}</h2>}
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="select-container">
                    <select className={"type-select " + getTypeDropdownColorClass()} aria-label="type" {...register("nodetype")}>
                        <option default value="experiment">Experiment</option>
                        <option value="vision">Vision</option>
                        <option value="outcome">Outcome</option>
                    </select>

                    <select className={"status-select " + getStatusDropdownColorClass()} aria-label="status" {...register("status")}>
                        <option default value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="complete">Complete</option>
                    </select>
                </div>

                <label>
                    Test Name
                    <input type="text" {...register("name")} />
                </label>

                <label>
                    Author/Contact
                    <input type="text" {...register("author")} />
                </label>

                <div className="type-duration">
                    <label>
                        Experiment Type
                        <select className={"experiment-type-select"} {...register("type")}>
                            <option value="wizardofoz">Wizard of Oz</option>
                            <option value="transactional">Transactional</option>
                            <option value="paperprototype">Paper prototype</option>
                        </select>
                    </label>

                    <label>
                        Duration
                        <div className="duration">
                            <input type="date" {...register("duration-start")} />
                            <p>&nbsp;to&nbsp;</p>
                            <input type="date" {...register("duration-end")} />
                        </div>
                    </label>
                </div>

                <label>
                    Hypothesis
                    <textarea {...register("hypothesis")} />
                </label>

                <fieldset className="risky-radios">
                    <legend>Risk level</legend>
                    <label>
                        <span className={getRiskRadioClass("low")} onClick={onRadioClick}>Low</span>
                        <input type="radio" value="low" {...register("risk")} />
                    </label>
                    <label>
                        <span aria-hidden={true} className={getRiskRadioClass("medium")} onClick={onRadioClick}>Med</span>
                        <input aria-label="Medium" type="radio" value="medium" {...register("risk")} />
                    </label>
                    <label>
                        <span className={getRiskRadioClass("high")} onClick={onRadioClick}>High</span>
                        <input type="radio" value="high" {...register("risk")} />
                    </label>
                </fieldset>


                <label>
                    Test
                    <textarea {...register("test")} />
                </label>

                <label>
                    Measure
                    <textarea {...register("measure")} />
                </label>

                <label>
                    Criteria
                    <textarea {...register("criteria")} />
                </label>

                <div className="button-container">
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </>)
}