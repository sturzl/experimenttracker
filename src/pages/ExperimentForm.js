import { useForm } from "react-hook-form";
import '../styles/ExperimentForm.scss';

export default function ExperimentForm(props) {
    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log('on submit form data', data);
        props.addExperiment(data);
    };

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

                <div className="inline-inputs">
                    <label className="half-width-input">
                        Experiment Type
                        <select {...register("type")}>
                            <option value="wizardofoz">Wizard of Oz</option>
                            <option value="transactional">Transactional</option>
                        </select>
                    </label>

                    <label className="half-width-input">
                        Duration
                        <input type="date" {...register("duration-start")} />
                        &nbsp;to&nbsp;
                        <input type="date" {...register("duration-end")} />
                    </label>
                </div>

                <label>
                    Hypothesis
                    <textarea {...register("hypothesis")} />
                </label>

                <fieldset  {...register("risk")}>
                    <legend>Risk level</legend>
                    <label>
                        Low
                        <input type="radio" />
                    </label>
                    <label>
                        Medium
                        <input type="radio" />
                    </label>
                    <label>
                        High
                        <input type="radio" />
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