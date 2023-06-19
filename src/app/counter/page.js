'use client'
import { useEffect, useRef, useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(10);
    const [resetCount,setResetCount] = useState(true)
    const [resendButton,setResendButton] = useState('disabled')
    const timerId = useRef()
  
    useEffect(() => {
        timerId.current = setInterval(() => {
            setCount((prevCount) => prevCount - 1);      
          }, 1000);        
    }, [resetCount]);

    useEffect(()=>{
        if(count===0){
            clearInterval(timerId.current);
            setResendButton('')
          }
    },[count])
  const handleResend = () =>{
    setCount(10)
    if(resetCount){
        setResetCount(false)
    }else{
        setResetCount(true)
    }
    setResendButton('disabled')
  }
    return (
      <>
        <p>{count}</p>
        <button onClick={handleResend} disabled={resendButton}>Resend</button>
      </>
    );
  }
  