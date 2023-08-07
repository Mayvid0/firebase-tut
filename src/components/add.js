import React, { useState } from 'react'
import {auth, db} from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'

export const Add = () => {

    const [newMovie , setNewMovie]= useState('')
    const [releaseDate, setReleaseDate]= useState('')
    const [hasOscar, setHasOscar]= useState(false)


    const moviesCollectionRef = collection(db, 'movies')
    const addMovie= async()=>{
        try{
            await addDoc(moviesCollectionRef, {
                title : newMovie,
                releaseDate: releaseDate,
                oscar: hasOscar,
                userID: auth?.currentUser?.uid
            })
            setNewMovie('');
            setReleaseDate('')
      setHasOscar(false);
        }catch(err){
            console.error(err)
        }
    }
  return (
    <div >
        <input type="text" placeholder='Enter movie name' value={newMovie} onChange={(e)=> setNewMovie(e.target.value)}/>
        <input type='number' placeholder='Enter year of release' value={releaseDate} onChange={(e)=> setReleaseDate(Number(e.target.value))}/>
        <input type='checkbox' id='check' checked={hasOscar} value={hasOscar} onChange={(e)=> setHasOscar(e.target.checked)} />
        <label htmlFor="check">Received an oscar</label>       
        <button type="submit" onClick={addMovie}>Submit Movie</button>
    </div>
  )
}
