
function ChecklistItem ({workoutName}) {
    return (
        <div>
            <input type="checkbox" id={workoutName} name={workoutName} value="checked" />
            <label for={workoutName}>{workoutName} </label>
            <button>X</button>
        </div>
    )
}

export default ChecklistItem


// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br></br>