import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import ContextUse from './components/ContextUse';
export const Context = createContext("light");
console.log(Context);

function App() {
     return (
       <div className="App" class="container-fluid text-center">
         <Context.Provider value="red">
           <div class="row bordered-div">
             <div class="col-3 gx-0 bordered-div">
               <ContextUse />
             </div>
             <div class="col-5 gx-10 bordered-div">
               <ContextUse />
             </div>
             <div class="col-4 gx-20 bordered-div">
               <ContextUse />
             </div>
           </div>
         </Context.Provider>
       </div>
   );
 }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
