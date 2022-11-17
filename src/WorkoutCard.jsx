import {useState} from 'react'

function FrontCard ({workout, handleAddRoutine, handleClick}) {

  const [added,setAdded] = useState(false)

  

  function handleAdd() {
    handleAddRoutine(workout.workoutName)
    setAdded(prev=>{
      setTimeout(()=>setAdded(false),2000)
      return true
    })
  }

  return (
    <>
      <div onClick={handleClick}>
        <h3 className="card__header" style={{textAlign: "center"}}>{workout.workoutName}</h3>
        <img className="card__img" src={workout.image} alt={workout.workoutName} />
      </div>
      <button className="card__btn" onClick={handleAdd}>{added? <img style={{height: "2rem"}} src='https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678134-sign-check-512.png' alt='check'></img>:"Add to Routine"}</button>
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



const WorkoutCard = ({workout, handleAddRoutine, length}) => {

  const [front, setFront] = useState(true)

  function handleClick() {
    setFront(!front)
  }
  
  return (
    <div className="workout_card" style={length===1?{maxWidth:"100%"}:{maxWidth:"30%"}}>
      {front?<FrontCard handleClick={handleClick} workout={workout} handleAddRoutine={handleAddRoutine}/>:<BackCard handleClick={handleClick} workout={workout}/>}
    </div>
  );
}
export default WorkoutCard;


// style={{height:"100px"}}