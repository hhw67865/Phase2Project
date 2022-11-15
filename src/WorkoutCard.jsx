const WorkoutCard = ({workout, handleAddRoutine}) => {

  function handleAdd() {
    handleAddRoutine(workout.workoutName)
  }
  
  return (
    <div>
        <h3>{workout.workoutName}</h3>
        <img src={workout.image} alt={workout.workoutName} style={{height:"100px"}}/>
        <p>{workout.instructions}</p>
        <button onClick={handleAdd}>Add to Routine</button>
    </div>
  );
}
export default WorkoutCard;