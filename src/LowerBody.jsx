import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function LowerBody ({workoutData, handleAddRoutine}) {

    const [sort, setSort] = useState("all")

    const lowerBodyWorkouts = workoutData.filter(workout=>{
        return workout.type==="lowerBody"
    })   
    
    const filteredLowerBodyWorkouts = lowerBodyWorkouts.filter(workout=>{
        if (sort==="all"){
            return true
        }        
        return workout.muscleGroup===sort
    })

    const lowerArray = filteredLowerBodyWorkouts.map((workout)=>{
        return (
            <WorkoutCard handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })

    function handleSort(e) {
        setSort(e.target.value)
    }
    

    return (
        <>
            <h1 className="pageTitle">Lower Body Workouts</h1>
            <select name="lowerbody" id="lowerbody" onChange={handleSort}>
                <option value="all">All</option>
                <option value="glutes">Glutes</option>
                <option value="hamstring">Hamstrings</option>
                <option value="quads">Quads</option>
                <option value="calf">Calfs</option>                
            </select> <br />
            <input type="search" name="search"/>
            <div className="workoutList">
                {lowerArray}
            </div>
        </>
    )
}

export default LowerBody