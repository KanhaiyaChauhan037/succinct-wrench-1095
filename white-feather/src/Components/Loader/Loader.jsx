import React from 'react'
import Lottie from 'lottie-react';
import loader from '../../Assets/loader.json'
import './loader.css'

const Loader = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: loader,
    //     rendererSettings: {
    //       preserveAspectRatio: "xMidYMid slice"
    //     }
    //   };
  return (
    <div className='loader'>
        <div className="loader-content">
        <Lottie animationData={loader} loop={true} height={20} width={20} />
        </div>
    </div>
  )
}

export default Loader