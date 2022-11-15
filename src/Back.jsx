import WorkoutCard from './WorkoutCard'

function Back ({workoutData, handleAddRoutine}) {
    const backWorkouts = workoutData.filter(workout=>{
        return workout.type==="back"
    })
    const backArray = backWorkouts.map((workout)=>{
        return (
            <WorkoutCard handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })

    return (
        <>
            <h1>Back Workouts</h1>
            <input type="search" name="search"/>
            <div className="workoutList">
                {backArray}
            </div>
        </>
    )
}

export default Back