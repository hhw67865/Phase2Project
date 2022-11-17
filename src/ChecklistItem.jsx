import {useState} from 'react'


function ChecklistItem ({eachRoutine,deleteRoutine}) {
    
    const [checked, setChecked] = useState(false)

    function handleDelete () {
        deleteRoutine(eachRoutine.id)        
    }

    function handleChecked() {
        setChecked(!checked)
    }

    return (
        <ul>
            <li onClick={handleChecked} className={checked?"checked":""}>
                <input type="checkbox"  name={eachRoutine.workoutName}/>
                <label htmlFor={eachRoutine.workoutName}>
                    {eachRoutine.workoutName}              
                </label>
                <span className="input"></span>
            </li>
            <p onClick={handleDelete}>Remove</p>
        </ul>
    )
}

export default ChecklistItem


// <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
// <label for="vehicle1"> I have a bike</label><br>
// <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
// <label for="vehicle2"> I have a car</label><br>
// <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
// <label for="vehicle3"> I have a boat</label><br></br>