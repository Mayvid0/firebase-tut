import React, { useState } from 'react';
import { auth, db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import 'tailwindcss/tailwind.css';

export const Add = () => {
  const [newMovie, setNewMovie] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [description, setDescription] = useState('');
  const [hasOscar, setHasOscar] = useState(false);

  const moviesCollectionRef = collection(db, 'movies');

  const addMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovie,
        releaseDate: releaseDate,
        oscar: hasOscar,
        description: description,
        userID: auth?.currentUser?.uid,
      });

      setNewMovie('');
      setReleaseDate('');
      setHasOscar(false);
      setDescription('');
    } catch (err) {
      console.error(err);
      window.alert("please sign in ")
      setNewMovie('');
      setReleaseDate('');
      setHasOscar(false);
      setDescription('');
    }
  };

  return (
    <div className='flex flex-col sm:flex-row gap-5 justify-center items-center mt-10 border-solid border-black border-2 mx-10 p-5'>
      <input
        className='border-solid p-2 border-blue-400 border-2 mb-2 sm:mb-0'
        type='text'
        placeholder='Enter movie name'
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
      />
      <input
        className='border-solid p-2 border-blue-400 border-2 mb-2 sm:mb-0'
        type='number'
        placeholder='Enter year of release'
        value={releaseDate}
        onChange={(e) => setReleaseDate(Number(e.target.value))}
      />
      <textarea
        className='bg-inherit p-2 text-base sm:text-2xl font-bold border bg-slate-300 mb-2 sm:mb-0'
        name='desc'
        id='desc'
        cols='20'
        rows='5'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Your Review'
      ></textarea>
      <div className='flex items-center'>
        <input
          className='border-solid p-2 border-blue-400 border-2'
          type='checkbox'
          id='check'
          checked={hasOscar}
          onChange={(e) => setHasOscar(e.target.checked)}
        />
        <label
          className='border-solid p-2 border-blue-400 border-2 ml-2'
          htmlFor='check'
        >
          Received an Oscar
        </label>
      </div>
      <button
        className='border-2 bg-green-700 border-black p-2'
        type='submit'
        onClick={addMovie}
      >
        Submit Movie
      </button>
    </div>
  );
};
