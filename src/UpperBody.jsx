import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function UpperBody ({workoutData, handleAddRoutine}) {

    const [sort, setSort] = useState("all")

    const upperBodyWorkouts = workoutData.filter(workout=>{
        return workout.type==="upperBody"
    })
    
    const filteredUpperBodyWorkouts = upperBodyWorkouts.filter(workout=>{
        if (sort==="all"){
            return true
        }        
        return workout.muscleGroup===sort
    })

    const upperArray = filteredUpperBodyWorkouts.map((workout)=>{
        return (
            <WorkoutCard  key={workout.id} handleAddRoutine={handleAddRoutine} workout={workout}/>
        )
    })

    function handleSort(e) {
        setSort(e.target.value)
    }
    

    return (
        <>
            <h1>Upper Body Workouts</h1>
            <select name="upperbody" id="upperbody" onChange={handleSort}>
                <option value="all">All</option>
                <option value="chest">Chest</option>
                <option value="shoulders">Shoulders</option>
                <option value="arms">Arms</option>
            </select> <br />
            <div className="workoutList">
                {upperArray}
            </div>
        </>
    )
}

export default UpperBody