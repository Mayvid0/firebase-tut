// MovieItem.js
import React, { useState } from 'react';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const MovieItem = ({ movie }) => {
    const [newTitle, setNewTitle] = useState('');

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
            setNewTitle('')
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1 style={{ color: movie.oscar ? 'green' : 'red' }}>{movie.title}</h1>
            <p>Year of release: {movie.releaseDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input
                type="text"
                placeholder='Change title...'
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button type='submit' onClick={() => updateTitle(movie.id)}>Submit</button>
        </div>
    );
};

export default MovieItem;
