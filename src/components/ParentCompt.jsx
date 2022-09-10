import React, { useCallback, useState } from 'react'
import Counter from './Counter'
import Title from './Title'
import DataCount from './DataCount'
import ButtonComponent from './ButtonComponent'
import ClasspurComponent from './ClasspurComponent';


const ParentCompt = () => {
const[age, setAge]=useState(10);
const[salary, setSalary]=useState(10000);

//returns memoised fuction
const incrementAge = useCallback(() => {
    setAge(age+5)
},[age]);

const incrementSalary =useCallback(() => {
    setSalary(salary+10000)
},[salary]);


  return (
    <div>
        <Title />
        <ClasspurComponent/>
        <DataCount count={age} text= "age" />
        <ButtonComponent handleClick={incrementAge}> Increment Age</ButtonComponent>
        <DataCount count={salary} text="Salary"/>
        <ButtonComponent handleClick={incrementSalary}> Increment Salary</ButtonComponent>


    </div>
  )
}

export default ParentCompt