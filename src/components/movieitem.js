import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const MovieItem = ({ movie }) => {
    const [newTitle, setNewTitle] = useState(movie.title);
    const [newDescription, setNewDescription] = useState(movie.description);

    const deleteMovie = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await deleteDoc(movieDoc);
        } catch (err) {
            console.error(err);
        }
    };

    const updateTitle = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await updateDoc(movieDoc, { title: newTitle });
            setNewTitle(movie.newTitle);
        } catch (err) {
            console.log(err);
        }
    };

    const updateDescription = async (id) => {
        try {
            const movieDoc = doc(db, 'movies', id);
            await updateDoc(movieDoc, { description: newDescription });
            setNewDescription(movie.newDescription);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex flex-col sm:flex-row gap-5 items-center justify-center mt-5 mx-4 bg-slate-50 p-4'>
            <div className='flex flex-col gap-7 items-center sm:items-start justify-center'>
                <h1 className='text-2xl sm:text-4xl font-bold' style={{ color: movie.oscar ? 'green' : 'red' }}>{movie.title}</h1>
                <p>Year of release: {movie.releaseDate}</p>
                <p className='p-2 m-4'>Review: {movie.description}</p>
                <button className='bg-red-700 border-2 border-black' onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            </div>

            <div className='flex flex-col sm:flex-row mt-5 gap-5 items-center'>
                <input
                    className='border-2 border-black p-2'
                    type="text"
                    placeholder='Change title...'
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <button className='border-2 border-black bg-green-600' type='submit' onClick={() => updateTitle(movie.id)}>Update Title</button>

                <textarea className='border-2 border-black p-2 mt-2 sm:mt-0'
                    placeholder='Change review...'
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <button className='bg-green-400 border-2 border-black' type='submit' onClick={() => updateDescription(movie.id)}>Update Description</button>
            </div>
        </div>
    );
};

export default MovieItem;
