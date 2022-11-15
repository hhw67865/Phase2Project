import Focus from "./Focus"
import WorkoutCreation from "./WorkoutCreation"
import {useState} from 'react'

function Home ({deleteRoutine,workoutData, routineList, setRoutineList, handleAddRoutine}) {

    const [focus, setFocus] = useState("")

    

    return (
        <>
            <h1>LOGO</h1>
            <Focus setFocus={setFocus} />
            <WorkoutCreation deleteRoutine={deleteRoutine} handleAddRoutine={handleAddRoutine} setRoutineList={setRoutineList} routineList={routineList} workoutData= {workoutData} focus = {focus}/>
        </>
    )
}

export default Home