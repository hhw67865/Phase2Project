import { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import LowerBody from './LowerBody'
import UpperBody from './UpperBody'
import Core from './Core'
import Back from './Back'


const baseUrl = "http://localhost:3001/workouts"
const routineUrl = "http://localhost:3001/routineList"

function App () {

  const [workoutData, setWorkoutData] = useState([])
  const [routineList, setRoutineList] = useState([])

  function deleteRoutine (id) {
    const afterDeleteArray = routineList.filter((routine)=>routine.id!==id)
    fetch(`http://localhost:3001/routineList/${id}`, {
            method: "DELETE"
        })

    setRoutineList(afterDeleteArray)
    
  }
  
  function handleAddRoutine (name) {
    const newRoutine = {workoutName:name}

    fetch(routineUrl, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(newRoutine)
    })
    .then(r=>r.json())
    .then(routine=>{
      setRoutineList(prev=>[...prev, routine])
    })
    
}

  useEffect(()=>{
    fetch(routineUrl)
    .then(r=>r.json())
    .then(setRoutineList)
    
  },[])


  useEffect(()=>{
    
    fetch(baseUrl)
    .then(r=>r.json())
    .then(data=>{

      data.sort((a,b)=> {
        if (a.workoutName.toLowerCase()<b.workoutName.toLowerCase()) {
          return -1
        }
        else if (a.workoutName.toLowerCase()>b.workoutName.toLowerCase()) {
          return 1
        }
        else {
          return 0
        }
      })

      setWorkoutData(data)

    })
  
  },[])
  
  

  return(
    <>
      <Navbar/>

      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home deleteRoutine={deleteRoutine} handleAddRoutine={handleAddRoutine} setRoutineList={setRoutineList} routineList={routineList} workoutData={workoutData}/> }/>
          <Route path="/upperbody" element={<UpperBody handleAddRoutine={handleAddRoutine} workoutData={workoutData}/>}/>
          <Route path="/lowerbody" element={<LowerBody handleAddRoutine={handleAddRoutine} workoutData={workoutData}/>}/>
          <Route path="/core" element={<Core handleAddRoutine={handleAddRoutine} workoutData={workoutData}/>}/>
          <Route path="/back" element={<Back handleAddRoutine={handleAddRoutine} workoutData={workoutData}/>}/>
          <Route path="*" element={<div>404 not found</div>}/>
  
        </Routes>
      </div>
    </>
  )
}

export default App
