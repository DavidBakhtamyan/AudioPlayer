import React from 'react'
import "./SongRow.css"
import { useDispatch } from 'react-redux'
import { playPause, favoriteAddRemove } from '../../store/slices/songListSlice/slice'
import { clearQueue } from '../../store/slices/queueSlice/queueSlice'
function SongRow({name, artist, track, isPlaying, favorite}) {
    const dispatch = useDispatch()
    const handlePlayPause = (id) =>{
        dispatch(clearQueue())
        dispatch(playPause(id))
    } 
    const handleFavorite = (id) => {
        dispatch(favoriteAddRemove(id))
    }
  return (
    <div className="SongRow">
        <div className="SongRowPlay">
            <i className="fas fa-grip-vertical"></i>
            {isPlaying ? 
            <i className="fas fa-pause pauseIcon" onClick={() => (handlePlayPause(track))}></i>
            :
            <i className="fas fa-play playIcon" onClick={() => (handlePlayPause(track))}></i>
            }
        </div>
        <div className="SongRowName">
            {name}
            {
                isPlaying && ( 
                    <div className='PlayingAnim'>
                        <span className='PlayingAnim1'></span>
                        <span className='PlayingAnim2'></span>
                        <span className='PlayingAnim3'></span>
                    </div>   
                )
            }
           
        </div>
        <div className="SongRowArtist">{artist}</div>
        <div className="SongRowTrack">{track}</div>
        <div className="SongRowAction">
            <i className={favorite ? "fas fa-heart favorite" : "fas fa-heart" } onClick={() => handleFavorite(track)}></i>
            <i className="fas fa-check"></i>
            <i className="fas fa-share"></i>
            <i className="fas fa-caret-down"></i>
        </div>
    </div>
  )
}

export default SongRow