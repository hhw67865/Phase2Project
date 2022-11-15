import WorkoutCard from './WorkoutCard'

function Core ({workoutData, handleAddRoutine}) {
    const coreWorkouts = workoutData.filter(workout=>{
        return workout.type==="core"
    })
    
    const coreArray = coreWorkouts.map((workout)=>{
        return (
            <WorkoutCard handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })
    return (
        <>
            <h1>Core Workouts</h1>            
            <input type="search" name="search"/>
            <div className="workoutList">
                {coreArray}
            </div>
        </>
    )
}

export default Core