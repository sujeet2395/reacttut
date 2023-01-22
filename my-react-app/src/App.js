import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';
import ContextUse from './components/ContextUse';
export const Context = createContext("light");
console.log(Context);

function App() {
     return (
      <div className="App">
        <Context.Provider value="dark">
          <ContextUse/>
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
