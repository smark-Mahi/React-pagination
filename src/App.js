import React,{Suspense,lazy} from 'react';
import './App.css';
//import Practicepaginate from './Components/Practicepaginate';
const Practicepaginate=lazy(()=>import('./Components/Practicepaginate'))
function App() {
  return (
    <div className="App">
    <Suspense fallback={<h2>Loading</h2>}>
    <Practicepaginate/>
    </Suspense>
    </div>
  );
}

export default App;
