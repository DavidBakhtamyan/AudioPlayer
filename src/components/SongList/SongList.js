import React, { useEffect, useState } from 'react';
import "./SongList.css";
import SongRow from '../SongRow/SongRow';
import { useDispatch, useSelector } from 'react-redux';
import { playPause } from '../../store/slices/songListSlice/slice';
import { addToQueue, removeFromQueue } from '../../store/slices/queueSlice/queueSlice';

function SongList() {
  const dispatch = useDispatch();
  const songList = useSelector((store) => store.songList);
  const sortList = useSelector((store) => store.sortList);
  const queue = useSelector((store) => store.queue);
  const filter = useSelector((store) => store.filter);
  const [orderedList, setOrderedList] = useState([...songList]);
  const [activeSong, setActiveSong] = useState(null)
  const [songDuration, setSongDuration] = useState(0)

  useEffect(() => {
    const activeSortName = sortList.find(el => el.isToggled)?.name;
    if (activeSortName === "Favorites") {
      setOrderedList([
        ...songList.filter(el => el.favorite),
        ...songList.filter(el => !el.favorite)
      ]);
    } else if (activeSortName === "A-Z") {
      setOrderedList([
        ...[...songList].sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      ]);
    } else {
      setOrderedList([...songList]);
    }
    setOrderedList(prev => prev.filter(el => el.name.toLowerCase().includes(filter.toLowerCase())));
  }, [sortList, songList, filter]);
  
//---------------------------------------------------------



useEffect(() => {
  if(queue.queueID.length > 0 && queue.isPlaying){
    dispatch(playPause(queue.queueID[0]))
  }
},[queue])
useEffect(() => {
  setActiveSong(prev => prev = songList.find(el => el.isPlaying))
  setSongDuration(songList.find(el => el.isPlaying)?.duration)
}, [songList])

useEffect(() => {
  if(activeSong){
    if(activeSong?.isPlaying && songDuration === 0) {
      dispatch(playPause(queue.queueID[0]))
      dispatch(removeFromQueue(queue.queueID[0]))
    }
        if (activeSong?.isPlaying && songDuration > 0) {
          setTimeout(() => {
            setSongDuration((prevTime) => prevTime - 1000);
          }, 1000);
        }
  }
}, [activeSong, songDuration])

  return (
    <main className='SongList'>
      <div className="SongListContainer">
        <div className="SongListPlay"></div>
        <div className="SongListName">Song Name</div>
        <div className="SongListArtist">Artist Name</div>
        <div className="SongListTrack">Track</div>
        <div className="SongListActions"></div>
      </div>
      <div className="SongRowContainer">
        {orderedList.map((el) => (
          <SongRow
            key={el.track}
            name={el.name}
            isPlaying={el.isPlaying}
            artist={el.artist_name}
            track={el.track}
            favorite={el.favorite}
          />
        ))}
        {!orderedList.length && <span>Nothing was found</span>}
      </div>
    </main>
  );
}

export default SongList;
