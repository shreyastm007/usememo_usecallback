import React, { useMemo, useState } from 'react'

const Counter = () => {
    const[counterOne, setCounterOne] =useState(0)
    const[counterTwo, setCounterTwo] =useState(0)
    
    const incrementCounterOne=() =>{
        setCounterOne(counterOne +1)
    };
  
    const incrementCounterTwo=() =>{
        setCounterTwo(counterTwo +1)
    };


    //usememo hook will return the memosised value and will be executed only when dependency is changed else it will return memosised value


    const isEven = useMemo(() => {
        console.log("isEven is executed");
        let j=0;
        while(j<200000){
        j++;
        }
        return counterTwo %2 === 0;
    },[counterTwo]);
  
  return (
    <div>
        <h1> Counter One:{counterOne}</h1>
        <h1> Counter Two:{counterTwo}</h1>
        <span> {isEven ? "even" : "odd" }</span>
        <button onClick={incrementCounterOne}> Increment counter 1 </button>
        {/* <h1> Counter Two:{counterTwo}</h1> */}
        <button onClick={incrementCounterTwo}> Increment counter 2 </button>
    </div>
  )
}

export default Counter