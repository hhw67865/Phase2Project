import Focus from "./Focus"
import WorkoutCreation from "./WorkoutCreation"
import {useState} from 'react'

function Home ({deleteRoutine,workoutData, routineList, setRoutineList, handleAddRoutine}) {

    const [focus, setFocus] = useState("")

    

    return (
        <>
            <img className='imglogo' src="https://images-platform.99static.com/Lw8CyZQrGrnlyPa-QHw8p4Tn7Nw=/200x200:1800x1800/500x500/top/smart/99designs-contests-attachments/121/121893/attachment_121893514" alt="logo" />
            <h1 className="logo">My Workout Routine</h1>
            <Focus setFocus={setFocus} />
            <WorkoutCreation deleteRoutine={deleteRoutine} handleAddRoutine={handleAddRoutine} setRoutineList={setRoutineList} routineList={routineList} workoutData= {workoutData} focus = {focus}/>
        </>
    )
}

export default Home