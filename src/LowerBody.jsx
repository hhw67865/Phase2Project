import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function LowerBody ({workoutData, handleAddRoutine}) {

    const [buttonData,setButtonData] = useState({
        glutes:false,
        hamstring: false,
        quads: false,
        calf: false
    })
    const [sort, setSort] = useState("all")

    const lowerBodyWorkouts = workoutData.filter(workout=>{
        return workout.type==="lowerBody"
    })   
    
    const filteredLowerBodyWorkouts = lowerBodyWorkouts.filter(workout=>{
        if (sort==="all"){
            return true
        }        
        return workout.muscleGroup===sort
    })

    const lowerArray = filteredLowerBodyWorkouts.map((workout)=>{
        return (
            <WorkoutCard handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
        )
    })

    function handleSort(e) {
        if (e.target.value===sort) {
            setSort("all")
            setButtonData({
                glutes:false,
                hamstring: false,
                quads: false,
                calf: false
            })
        }
        else {
            setSort(e.target.value)
            setButtonData(prev=>{
                
                const freshData={
                    glutes:false,
                    hamstring: false,
                    quads: false,
                    calf: false
                }
            
                return {...freshData,[e.target.value]:true}
            })
        }

    }
    

    return (
        <>
            <h1 className="pageTitle">Lower Body Workouts</h1>
            <div className='buttonHolder'>
                <button class="button-33" style={buttonData.glutes?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="glutes" role="button">Glutes</button>
                <button class="button-33" style={buttonData.hamstring?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="hamstring" role="button">Hamstrings</button>
                <button class="button-33" style={buttonData.quads?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="quads" role="button">Quads</button>
                <button class="button-33" style={buttonData.calf?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="calf" role="button">Calfs</button>
            </div>
                        
            <div className="workoutList">
                {lowerArray}
            </div>
        </>
    )
}

export default LowerBody