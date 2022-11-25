import React from 'react';
import {useState} from 'react';
import {data} from './faq';
import SingleQuestion from './SingleQuestion';

const App = () => {
 const[show,setShow] = useState(data);
  return (
    <section>
     <h2>Frequently Asked Questions</h2>
     {
      show.map((question)=>{
      return <SingleQuestion key={question.id}{...question}/>
      })
     }

    </section>
  )
}

export default App
