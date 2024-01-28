import { useState } from 'react';
import './App.css';
import MusicUploadForm from './components/MusicUploadForm/MusicUploadForm';
import Navbar from './components/Navbar/Navbar';
import SongList from './components/SongList/SongList';
import Loading from './components/Loading/Loading';

function App() {
  const [isUploading, setIsUploading] = useState(false)
  return (
    <>
      <div className='container'>
        <Navbar />
        <SongList />
        <MusicUploadForm setIsUploading={setIsUploading} />
      </div>
        {
          isUploading && <Loading />
        }
    </>
  );
}

export default App;
