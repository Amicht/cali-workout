import React, { useState, useEffect } from 'react';
import './timer.scss';
interface Props {
  startTime: number;
  isBreak?: boolean,
  onTimoutHandler: () => void;
}

const Timer: React.FC<Props> = ({ startTime, isBreak, onTimoutHandler }) => {
  const [seconds, setSeconds] = useState(startTime);

  const numToTime = (seconds:number) => {
    let mins = 0;
    if(seconds >= 60 ) {
      mins = Math.floor(seconds / 60);
    }
    const secs = seconds - (mins * 60);
    return `${mins}:${secs<10?'0':''}${secs}`
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    if(seconds <= 0 ) {
      onTimoutHandler();
      clearInterval(timer); 
    }
    return () => {
      clearInterval(timer); 
    }
  }, [seconds]);


  return <div className={`
    ${seconds < 4?'text-danger':'text-secondary'} 
      mt-2 mx-auto timer py-3`}>
    {numToTime(seconds)}
    </div>;
};

export default Timer;