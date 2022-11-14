function Back () {
    return (
        <>
            <h1>Back Workouts</h1>
            <select name="back" id="back">
                <option value="upperback">Upper back</option>
                <option value="lowerback">Lower back</option>

            </select> <br />
            <input type="search" name="search"/>
            <div className="workoutList">

            </div>
        </>
    )
}

export default Back