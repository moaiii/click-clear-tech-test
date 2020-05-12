import React, {useEffect, useState} from 'react';
import Search from './Components/Search';
import Results from './Components/Results';
import Header from './Components/Header';
import fetchData from './Utils/fetchData';
import './App.css';

interface iTrack {
  artist: string
  title: string
  id: number
}

function App() {
  const [searchedTracks, setSearchedTracks] = useState<iTrack[]>([]);

  /** @describe GET all tracks on initial page load */
  useEffect(() => {   
    fetchData(process.env.REACT_APP_API_BASE_URL, setSearchedTracks)
  }, [])

  return (
    <div className="App">
      <Header />
      <Search setSearchedTracks={setSearchedTracks}/>
      <Results searchedTracks={searchedTracks}/>
    </div>
  );
}

export default App;
