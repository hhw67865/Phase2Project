import {useState} from 'react'

function FrontCard ({workout, handleAddRoutine, handleClick}) {


  function handleAdd() {
    handleAddRoutine(workout.workoutName)
  }

  return (
    <>
      <div onClick={handleClick}>
        <h3 className="card__header" style={{textAlign: "center"}}>{workout.workoutName}</h3>
        <img className="card__img" src={workout.image} alt={workout.workoutName} />
      </div>
      <button className="card__btn" onClick={handleAdd}>Add to Routine</button>
    </>
  )
}

function BackCard ({workout, handleClick}) {
  return (
    <div onClick={handleClick}>
      <p className="card__text" >{workout.instructions}</p>
    </div>
    

  )
}



const WorkoutCard = ({workout, handleAddRoutine}) => {

  const [front, setFront] = useState(true)

  function handleClick() {
    setFront(!front)
  }
  
  return (
    <div className="workout_card">
      {front?<FrontCard handleClick={handleClick} workout={workout} handleAddRoutine={handleAddRoutine}/>:<BackCard handleClick={handleClick} workout={workout}/>}
    </div>
  );
}
export default WorkoutCard;


// style={{height:"100px"}}