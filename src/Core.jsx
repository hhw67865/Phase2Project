import WorkoutCard from './WorkoutCard'

function Core ({workoutData, handleAddRoutine, setSearchQuery, searchQuery}) {
    const coreWorkouts = workoutData.filter(workout=>{
        return workout.type==="core"
    })

    const filteredCoreWorkouts = coreWorkouts.filter(workout=>{
        return workout.workoutName.toLowerCase().includes(searchQuery.toLowerCase())
    })
    
    const coreArray = filteredCoreWorkouts.map((workout)=>{
        return (
            <WorkoutCard length={filteredCoreWorkouts.length} handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })

    

    function handleSearch(e){
        setSearchQuery(e.target.value)
    }

    return (
        <>
            <h1 className="pageTitle">Core Workouts</h1>  
            <input onChange={handleSearch} type="text" name="search" value={searchQuery} placeholder='Search...'/>         
            <div className="workoutList">
                {coreArray}
            </div>
        </>
    )
}

export default Core