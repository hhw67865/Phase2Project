
function UpperBody () {
    return (
        <>
            <h1>Upper Body Workouts</h1>
            <select name="upperbody" id="upperbody">
                <option value="chest">Chest</option>
                <option value="shoulders">Shoulders</option>
                <option value="arms">Arms</option>
            </select> <br />
            <input type="search" name="search"/>
            <div className="workoutList">

            </div>
        </>
    )
}

export default UpperBody