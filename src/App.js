// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [name, setname] = useState('');
//   const [tasks, setTasks] = useState([]);

//   const handleInputChange = (event) => {
//     setname(event.target.value);
//   };

//   const handleAddTask = () => {
//     setTasks([...tasks, name]);
//     setname('');
//   };

//   return (
//     <div className="App">
//       <div className="input-container">
//         <input type="text" value={name} onChange={handleInputChange} />
//         <button onClick={handleAddTask}>Add</button>
//       </div>
//       <ol>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// // export default App;
// import React, { useState } from 'react';
// import './App.css';

//  function App() {
//   const [name, setname] = useState(0);
//   function incremwntname(){
//     setname(name + 1 )
//   }
//   function decrementname(){
//     setname(name - 1 )
//   }
//   return(
//     <div div className = "App"  >
//     <h4>{name}</h4>
    
//     <button onClick={incremwntname}>INCRESE name</button> 
//     <button onClick={decrementname}>DECRESE name</button>
//     </div>
//   );
//   }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState('Amit');
  
  function  handleclick(){
    setname(name=== 'Amit' ? 'Rajan' : 'Amit');
  }

  return (
    <div className="App">
        <h1>MY NAME IS {name}</h1>
        <button onClick={handleclick}>Change Name</button>
      </div>
  );
}
export default App ;