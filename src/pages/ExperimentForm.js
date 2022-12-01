export default function ExperimentForm() {
    return (<>
        <h1>Create an Experiment</h1>
        <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <label>
                Hypothesis:
                <input type="text" name="name" />
            </label>
            <label>
                Risk Level:
                <input type="text" name="name" />
            </label>
            <label>
                Test:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </>)
}