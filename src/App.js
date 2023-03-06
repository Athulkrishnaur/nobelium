import React  from 'react'

  import {Heading1}  from './COMPONENTS/heading1';
  import { Heading2 } from "./COMPONENTS/heading2";
  import { Heading3 } from "./COMPONENTS/heading3";
 import { Click } from "./COMPONENTS/clickbutton";


function App() {
  return (
    <>
     <div  className='App'>
      {/* <h1>I AM HEADING ONE......FROM FRIST COMPONENT</h1> 
    <h2>I AM HEADING TWO......FROM TWO COMPONENT</h2>
    <h3>I AM HEADING THREE......FROM THREE COMPONENT</h3>
    <button>click me</button>    */}
     <Heading1 />
    <Heading2 />
    <Heading3 />
    <Click />  c
    </div>
    </>
  );
}

export default App;
