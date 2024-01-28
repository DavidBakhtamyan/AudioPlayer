import React, { useRef } from 'react'
import "./MusicUploadForm.css"
import { useDispatch } from 'react-redux'
import { uploadMusic } from '../../store/slices/songListSlice/slice'

function MusicUploadForm({setIsUploading}) {
  const dispatch = useDispatch()
  const fileInputRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault()

    if(event.target[0]?.files[0]?.name){
      setIsUploading(true)
      await new Promise(resolve => setTimeout(resolve, 5000));
      setIsUploading(false)
      dispatch(uploadMusic(event.target[0].files[0].name.replace(/\.[^/.]+$/, '')))
    }else{
      console.error("Something went wrong while uploading")
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }
  return (
    <form onSubmit={handleSubmit} className='MusicUploadForm'>
        <input type="file" accept=".mp3, .wav, audio/*" ref={fileInputRef}/>
        <button>Upload</button>
    </form>
  )
}

export default MusicUploadForm