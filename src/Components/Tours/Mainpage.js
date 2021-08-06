import React, { useState, useEffect } from 'react';
import Loading from './Loading'
import './Tours.css'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'

const Mainpage = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([]
    )
    const handleDelete = (e, id) => {
        const newTours = tours.filter(tour => tour.id !== id)
      
        setTours(newTours)
         
     }

    const fetchTours = async () => {
        try {
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        }
        catch {
            setLoading(true)
        }
   
    }
    useEffect(() => {
        fetchTours();
    }, [])


    if (loading) {
        return (<main>
            <Loading/>
        </main>)
    }
    else if (tours.length===0){
        return (<main>
            <div className="title">
                <h2> No Tours Left</h2>
            </div>
            </main>
            )
            
    }
    return (<main>
        <Tours tours={tours} handleDelete={ handleDelete}/>
    </main>
    );
}
 
export default Mainpage;
