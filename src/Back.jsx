import WorkoutCard from './WorkoutCard'

function Back ({workoutData, handleAddRoutine, setSearchQuery, searchQuery}) {
    const backWorkouts = workoutData.filter(workout=>{
        return workout.type==="back"
    })

    const filteredBackWorkouts = backWorkouts.filter(workout=>{
        return workout.workoutName.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const backArray = filteredBackWorkouts.map((workout)=>{
        return (
            <WorkoutCard length={filteredBackWorkouts.length} handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })

    function handleSearch(e){
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <h1 className="pageTitle">Back Workouts</h1>
            <input onChange={handleSearch} type="text" name="search" value={searchQuery} placeholder='Search...'/> 
            <div className="workoutList">
                {backArray}
            </div>
        </>
    )
}

export default Back