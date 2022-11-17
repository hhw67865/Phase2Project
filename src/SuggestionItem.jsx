
function SuggestionItem ({eachWorkout,handleAddRoutine}) {

    

    function handleAdd() {
        handleAddRoutine(eachWorkout.workoutName)
    }

    return (
        <div>
            <p>{eachWorkout.workoutName}</p>
            <img src={eachWorkout.image} alt={eachWorkout.name} style={{height:"100px"}}/>            
            
            <button onClick={handleAdd}>Add to Routine</button>
        </div>
    )
}

export default SuggestionItem