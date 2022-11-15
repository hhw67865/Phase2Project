function LowerBody () {
    return (
        <>
            <h1>Lower Body Workouts</h1>
            <select name="lowerbody" id="lowerbody">
                <option value="glutes">Glutes</option>
                <option value="hamstrings">Hamstrings</option>
                <option value="quads">Quads</option>
                <option value="calfs">Calfs</option>                
            </select> <br />
            <input type="search" name="search"/>
            <div className="workoutList">

            </div>
        </>
    )
}

export default LowerBody