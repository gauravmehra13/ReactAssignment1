import React,{useState} from 'react'
import ClassCard from './classCard';
import FunctionalCard from './funcCard';


export default function Cards() {
  const [fActive, funcActive] = useState();
  const [cActive, classActive] = useState();
  return (
    <>
    <h1 className='heading'>Styling using Functional and Class Component</h1>
    <div className='box'>
        <button className='btns' onClick={() => funcActive(!fActive)}>
            To see styling in functional component
        </button>

        <button className='btns' onClick={() => classActive(!cActive)}>
            To see styling in class component
        </button>
    </div>
   
   <div className="cards">
      
        {fActive ? <FunctionalCard data={"Functional"}/> : null}
        {cActive ? <ClassCard/> : null}
        
     
   </div>
</>
  )
}