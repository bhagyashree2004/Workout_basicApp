
import { useEffect, useState } from 'react'
import WorkoutsDetails from "../components/WorkoutsDetails.jsx"
import WorkoutForm from '../components/WorkoutForm.jsx'
import {useWorkoutContext} from '../hooks/useWorkoutContext.jsx'

const Home = () => {
    // const [workouts, setWorkouts] = useState(null)
    const { workouts, dispatch } = useWorkoutContext()
    

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts')
            const json = await response.json()

            if (response.ok) {
                // setWorkouts(json)
                dispatch({type: 'SET_WORKOUTS', payload: json})

            }
        }

        fetchWorkouts()
    }, [dispatch])

    return (
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutsDetails workout={workout} key={workout._id} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}

export default Home


