
function Focus ({setFocus}) {


    function handleFocus (e) {
        setFocus(e.target.value)
    }

    return (
        <div className="focusDiv">
            <h2>What part of your body do you want to work on?</h2>
            <select name="bodypart" id="bodypartDropdown" onChange={handleFocus}>
                <option value="Workout">Workouts</option>
                <option value="upperBody">Upper Body</option>
                <option value="core">Core</option>
                <option value="lowerBody">Lower Body</option>
                <option value="back">Back</option>  
            </select>


        </div>
    )
}

export default Focus