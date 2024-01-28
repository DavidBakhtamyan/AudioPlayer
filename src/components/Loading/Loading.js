import React from 'react'
import "./Loading.css"
function Loading() {
  return (
    <div className='LoadingContainer'>
        <div className='Loading'>
            <div className='LoadingText'>
                <span>Uploading</span>
                <div className='dots'>
                    <span className='dot1'>.</span>   
                    <span className='dot2'>.</span>   
                    <span className='dot3'>.</span>   
                </div>
            </div>
            <span className='progressBar'></span>
        </div>
    </div>
  )
}

export default Loading