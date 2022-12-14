import ChecklistItem from "./ChecklistItem"
import SuggestionItem from "./SuggestionItem"
import {useState, useEffect} from 'react'

function WorkoutCreation ({deleteRoutine,workoutData, focus, routineList, setRoutineList,handleAddRoutine, setSearchQuery}) {

    const [randomArray, setRandomArray] = useState([])
    
    const [formData, setFormData] = useState({workoutName: ""})

    
    const routineListArray = routineList.map((eachRoutine)=>{
        return <ChecklistItem key={eachRoutine.id} deleteRoutine={deleteRoutine} eachRoutine={eachRoutine}/>
    })
    

    function generateRandomWorkout (quantity, array) {
        if (array.length<quantity) {
            return array
        }
        const arr = []
        while(arr.length < quantity) {
            
            let candidateComponent = array[Math.floor(Math.random()*array.length)]
            if(arr.indexOf(candidateComponent) === -1) {
                arr.push(candidateComponent)
            } 
        }
        return arr
    }

    const filteredWorkouts = workoutData.filter(eachWorkout => {
        return eachWorkout.type === focus
    })

    useEffect(()=>{
        setRandomArray(()=>generateRandomWorkout(4,filteredWorkouts))

    },[focus])   

    const workoutDataArray = randomArray.map(eachWorkout => {
        return (
            <SuggestionItem 
                key = {eachWorkout.id}
                eachWorkout = {eachWorkout}
                handleAddRoutine= {handleAddRoutine}
                setSearchQuery={setSearchQuery}
            />
        )
    })

    function handleSuggestions() {
        setRandomArray(()=>generateRandomWorkout(4,filteredWorkouts))
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const newRoutine = {workoutName: formData.workoutName}
        fetch("http://localhost:3001/routineList", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newRoutine)
          })
          .then(r=>r.json())
          .then(routine=>{
            setRoutineList(prev=>[...prev, routine])
          })
          setFormData({workoutName: ""})

    }
    function handleFormData (e) {
        const {name,value} = e.target
        setFormData({...formData, [name]:value})
    }

    
    

    
    
    
    return (
        <div className="routineContainer">
            <div className="routine">
                <h2>Workout Routine</h2>
                <hr/>
                <form className="flex-form" onSubmit={handleSubmit}>
                    <input type="text" name="workoutName" id="inputRoutine" onChange={handleFormData} value={formData.workoutName}/>
                    <input type="submit" value="Add workout"/>
                </form>
                <div id="checklist" className="website_checklist">
                    {routineListArray}
                    {/* <ChecklistItem workoutName="Chest bro"/> */}
                </div>
            </div>
            <div className="suggestions">
                <h2>Suggestions</h2>    
                <hr/>            
                {workoutDataArray}
                <button style={focus===""?{display:"none"}:{display: "inline-block"}} className="suggestions_btn" onClick={handleSuggestions}>More Suggestions</button>
            </div>

        </div>
    )
}

export default WorkoutCreation

