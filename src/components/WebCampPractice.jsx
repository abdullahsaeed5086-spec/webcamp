import React, { useCallback, useRef, useState } from 'react'
import Webcam from 'react-webcam'

const WebCampPractice = () => {
  const [imgSrc,setImgSrc]=useState(null);
const webcamRef=useRef (null);
const Capture=useCallback(()=>{
const abc=webcamRef.current.getScreenshot();
setImgSrc(abc);

}, [webcamRef])
const Retake=()=>{
setImgSrc(null);
}


// const Pagewebcam = () => {
//     const WebcamRef=useRef(null);
//     const[pitcher,setPitcher]=useState(null);
//     const capture=useCallback(()=>{
//         const aa=WebcamRef.current.getScreenshot();
// setPitcher(aa)
//     },[WebcamRef])  
//     const retake=()=>{
//         setPitcher(null);

//     }

  return (
    <div>
 <h1>WebCam </h1>

{imgSrc? (<img src={imgSrc}/>):(<Webcam ref={webcamRef}/>)}
I
{imgSrc? ( <div className='uu'><button type='button' onClick={Retake}>ReTake Photo</button></div>):(
<div className='uu'><button type='button'  onClick={Capture}>Take Photo</button></div>
)}
        {/* {pitcher? (
          <img src={pitcher}></img>
          ):(
          <Webcam style={{height:"250", width:"300px"}} ref={WebcamRef}/>
          )}
        
     {pitcher? ( <button onClick={retake}>retake pitcher</button>):( <button onClick={capture}>take pitcher</button>)} */}
       
    
    </div>
  )
}

export default WebCampPractice
