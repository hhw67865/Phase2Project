import {useNavigate} from 'react-router-dom'


function SuggestionItem ({eachWorkout,handleAddRoutine, setSearchQuery}) {

    let navigate = useNavigate();
       

    

    function handleAdd() {
        handleAddRoutine(eachWorkout.workoutName)
    }

    function handleMore() {
        navigate(`/${eachWorkout.type.toLowerCase()}`)
        setSearchQuery(eachWorkout.workoutName)
        
    }
    

    return (
        <div className="suggestionGrid">
            <p id="suggestion1">{eachWorkout.workoutName}</p>
            <img id="suggestion2" src={eachWorkout.image} alt={eachWorkout.name} style={{height:"100px"}}/>            
            
            <button id="suggestion3" onClick={handleAdd}>Add to Routine</button>
            <button id="suggestion4" onClick={handleMore}>More Details</button>
        </div>
    )
}

export default SuggestionItem