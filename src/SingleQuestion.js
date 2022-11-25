import React from 'react';
import {useState} from 'react';

const SingleQuestion = ({question,answer}) => {
 const [show,setShow] = useState(false);
  return (
    <section>
     <div className='single'>
      <h2>{question}</h2>
      <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
      </div>
      {show && <h3>{answer}</h3>}
    

    </section>
  )
}

export default SingleQuestion
