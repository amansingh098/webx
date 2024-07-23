import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import transitionVideo from '../assets/the.mp4'

const Transition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative flex justify-center items-center h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay muted>
        <source src={transitionVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     
    </div>
  );
};

export default Transition;
