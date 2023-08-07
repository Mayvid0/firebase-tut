import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { Add } from './components/add';
import MovieList from './components/movieList';
import {FileUpload} from './components/fileupload'

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const moviesCollectionRef = collection(db, 'movies');

    const unsubscribe = onSnapshot(moviesCollectionRef, (snapshot) => {
      const updatedMovieList = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(updatedMovieList);
    });

    return () => {
      unsubscribe(); // Unsubscribe from the real-time updates when the component unmounts
    };
  }, []);

  return (
    <div className="App">
      <Auth />
      <Add />
      <MovieList movieList={movieList}/><br /><br /><br />
      <FileUpload />
    </div>
  );
}

export default App;
