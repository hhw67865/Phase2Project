import {useState} from 'react'
import WorkoutCard from './WorkoutCard'

function UpperBody ({workoutData, handleAddRoutine, setSearchQuery, searchQuery}) {

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

    const filteredUpperBodyWorkouts2 = filteredUpperBodyWorkouts.filter(workout=>{
        return workout.workoutName.toLowerCase().includes(searchQuery.toLowerCase())
    })



    const upperArray = filteredUpperBodyWorkouts2.map((workout)=>{
        return (
            <WorkoutCard length={filteredUpperBodyWorkouts2.length} key={workout.id} handleAddRoutine={handleAddRoutine} workout={workout}/>
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

    function handleSearch(e){
        setSearchQuery(e.target.value)
    }
    
    

    return (
        <>
            <h1 className="pageTitle">Upper Body Workouts</h1>
            <div className='buttonHolder'>
                <button className="button-33" style={buttonData.chest?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="chest" role="button">Chest</button>
                <button className="button-33" style={buttonData.shoulders?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="shoulders" role="button">Shoulders</button>
                <button className="button-33" style={buttonData.arms?{fontWeight:"800"}:{fontWeight:"400"}} onClick={handleSort} value="arms" role="button">Arms</button>
                
            </div>     
            <input onChange={handleSearch} type="text" name="search" value={searchQuery} placeholder='Search...'/>       
            <div className="workoutList">
                {upperArray}
            </div>
        </>
    )
}

export default UpperBody