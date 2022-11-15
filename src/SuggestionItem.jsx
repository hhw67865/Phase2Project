
function SuggestionItem ({eachWorkout,handleAddRoutine}) {

    

    function handleAdd() {
        handleAddRoutine(eachWorkout.workoutName)
    }

    return (
        <div>
            <h3>{eachWorkout.workoutName}</h3>
            <img src={eachWorkout.image} alt={eachWorkout.name} style={{height:"100px"}}/>            
            <p>{eachWorkout.instructions}</p>
            <button onClick={handleAdd}>Add to Routine</button>
        </div>
    )
}

export default SuggestionItem