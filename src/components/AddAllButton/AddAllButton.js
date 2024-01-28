import React from 'react';
import "./AddAllButton.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToQueue, clearQueue } from '../../store/slices/queueSlice/queueSlice';
const AddAllButton = () => {
    const songList = useSelector(store => store.songList)
    const dispatch = useDispatch()
    const queue =  useSelector(store => store.queue)
    const handleAddAll = () => {
        dispatch(clearQueue())
        songList.forEach(el => {
            dispatch(addToQueue(el.track))
          });
          console.log(queue);
    }
    return (
        <div className='AddAllButton' onClick={handleAddAll}>
            <button className='AddAllButtonBtn'><i className="fas fa-plus"></i><span className='AddAllText'>Add All</span></button>
            <div className='AddAllButtonDropdown'><i className="fas fa-caret-down"></i></div>
        </div>
    );
}

export default AddAllButton;
