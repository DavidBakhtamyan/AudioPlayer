import React, { useEffect, useState } from 'react';
import './PlayAllButton.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue, clearQueue, startStopPlaying } from '../../store/slices/queueSlice/queueSlice';
const PlayAllButton = () => {
    const songList = useSelector(store => store.songList)
    const dispatch = useDispatch()

   const handlePlayAll = () => {
    dispatch(clearQueue())
    songList.forEach(el => {
        dispatch(addToQueue(el.track))
      });
      dispatch(startStopPlaying())
   } 
    return (
        <div className='PlayAllButton' onClick={handlePlayAll}>
            <button className='PlayAllButtonBtn'><i className="fas fa-play"></i><span className='PlayAllText'>Play All</span></button>
            <div className='PlayAllButtonDropdown'><i className="fas fa-caret-down"></i></div>
        </div>
    );
}

export default PlayAllButton;
