import { useForm } from "react-hook-form";
import '../styles/ExperimentForm.scss';

export default function ExperimentForm(props) {
    const {
        register,
        handleSubmit,
        watch
    } = useForm();

    const onSubmit = (data) => {
        console.log('on submit form data', data);
        props.addExperiment(data);
    };

    const onRadioClick= (event) => {
        event.currentTarget.classList.toggle('selected');
    }

    const currentRiskRadioValue = watch("risk", "");

    const radioActive = (radioValue) => {
        const isActive = radioValue === currentRiskRadioValue;
        return isActive ? "selected" : "";
    }

    return (<>
        <div className="experiment-form">
            <h1 className="page-title">Create an Experiment</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Test Name
                    <input type="text" {...register("test-name")} />
                </label>

                <label>
                    Author/Contact
                    <input type="text" {...register("author")} />
                </label>

                <div className="type-duration">
                    <label>
                        Experiment Type
                        <select {...register("type")}>
                            <option value="wizardofoz">Wizard of Oz</option>
                            <option value="transactional">Transactional</option>
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
                        <span className={radioActive("low")} onClick={onRadioClick}>Low</span>
                        <input type="radio" value="low" {...register("risk")} />
                    </label>
                    <label>
                        <span aria-hidden={true} className={radioActive("medium")} onClick={onRadioClick}>Med</span>
                        <input aria-label="Medium" type="radio" value="medium" {...register("risk")} />
                    </label>
                    <label>
                        <span className={radioActive("high")}  onClick={onRadioClick}>High</span>
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