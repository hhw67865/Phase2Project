import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function LowerBody ({workoutData, handleAddRoutine, setSearchQuery, searchQuery}) {

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
    const filteredLowerBodyWorkouts2 = filteredLowerBodyWorkouts.filter(workout=>{
        return workout.workoutName.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const lowerArray = filteredLowerBodyWorkouts2.map((workout)=>{
        return (
            <WorkoutCard length={filteredLowerBodyWorkouts2.length}  handleAddRoutine={handleAddRoutine} key={workout.id} workout={workout}/>
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
    function handleSearch(e){
        setSearchQuery(e.target.value)
    }
    

    return (
        <>
            <h1 className="pageTitle">Lower Body Workouts</h1>
            <div className='buttonHolder'>
                <button className="button-33" style={buttonData.glutes?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="glutes" role="button">Glutes</button>
                <button className="button-33" style={buttonData.hamstring?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="hamstring" role="button">Hamstrings</button>
                <button className="button-33" style={buttonData.quads?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="quads" role="button">Quads</button>
                <button className="button-33" style={buttonData.calf?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="calf" role="button">Calfs</button>
            </div>
            <input onChange={handleSearch} type="text" name="search" value={searchQuery} placeholder='Search...'/>       
                        
            <div className="workoutList">
                {lowerArray}
            </div>
        </>
    )
}

export default LowerBody