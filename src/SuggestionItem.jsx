
function SuggestionItem ({image, workoutName, instruction}) {
    return (
        <div>
            <h3>{workoutName}</h3>
            <img src={image} alt={workoutName} />            
            <p>{instruction}</p>

        </div>
    )
}

export default SuggestionItem