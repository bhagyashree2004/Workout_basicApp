import React from 'react'
import { RxCross2 } from "react-icons/rx";
import "../index.css"; 
import { useWorkoutContext } from '../hooks/useWorkoutContext';
//date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutsDetails = ({ workout }) => {

  const {dispatch} = useWorkoutContext();

    const handleClick = async () => {
        const response = await fetch('/api/workouts/' + workout._id, {
            method: 'DELETE',

        })

        const json = await response.json()

        if(response.ok){
            dispatch({
              type: 'DELETE_WORKOUT', payload: workout._id
            })
        }

    }



  return (
    <div className="workout-details">
    <h4>{workout.title}</h4>
    <p><strong>Load (kg): </strong>{workout.load}</p>
    <p><strong>Number of reps: </strong>{workout.reps}</p>
    <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
    <span onClick={handleClick}><RxCross2 className="icon"  /></span>
    </div>
  )
}

export default WorkoutsDetails