import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function UpperBody ({workoutData, handleAddRoutine}) {

    const [sort, setSort] = useState("all")
    const [buttonData,setButtonData] = useState({
        chest:false,
        shoulders: false,
        arms: false
        
    })

    const upperBodyWorkouts = workoutData.filter(workout=>{
        return workout.type==="upperBody"
    })
    
    const filteredUpperBodyWorkouts = upperBodyWorkouts.filter(workout=>{
        if (sort==="all"){
            return true
        }        
        return workout.muscleGroup===sort
    })

    const upperArray = filteredUpperBodyWorkouts.map((workout)=>{
        return (
            <WorkoutCard  key={workout.id} handleAddRoutine={handleAddRoutine} workout={workout}/>
        )
    })

    function handleSort(e) {
        if (e.target.value===sort) {
            setSort("all")
            setButtonData({
                chest:false,
                shoulders: false,
                arms: false
               
            })
        }
        else {
            setSort(e.target.value)
            setButtonData(prev=>{
                
                const freshData={
                    chest:false,
                    shoulders: false,
                    arms: false
                }
            
                return {...freshData,[e.target.value]:true}
            })
        }

    }

    

    return (
        <>
            <h1 className="pageTitle">Upper Body Workouts</h1>
            <div className='buttonHolder'>
                <button class="button-33" style={buttonData.chest?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="chest" role="button">Chest</button>
                <button class="button-33" style={buttonData.shoulders?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="shoulders" role="button">Shoulders</button>
                <button class="button-33" style={buttonData.arms?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="arms" role="button">Arms</button>
                
            </div>            
            <div className="workoutList">
                {upperArray}
            </div>
        </>
    )
}

export default UpperBody