import {useState} from 'react'


function ChecklistItem ({eachRoutine,deleteRoutine}) {
    

    function handleDelete () {
        deleteRoutine(eachRoutine.id)        
    }

    return (
        <div>
            <input type="checkbox" id={eachRoutine.workoutName} name={eachRoutine.workoutName} value="checked" />
            <label htmlFor={eachRoutine.workoutName}>{eachRoutine.workoutName} </label>
            <button onClick={handleDelete}>X</button>
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