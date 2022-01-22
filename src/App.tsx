import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import HookedCounter from './components/hookedCounter';
import NonHookedCounter from './components/nonHookedCounter';

function App() {
  const [parentCount, updateParentCount] = useState(0);

  return (
    <div className="h-full flex flex-row">
      <div className='basis-1/3 flex flex-col justify-around items-center border-2'>
        <div className='text-4xl text-red-500'>
          Parent count value is: <span className='font-bold'>{parentCount}</span>
        </div>
        <div>
          <button
            className='bg-purple-500 text-white w-full px-10 py-2 rounded-md'
            onClick={() => updateParentCount(parentCount + 1)}>Update Parent State!</button>
        </div>
      </div>
      <div className='basis-1/3 flex flex-col justify-around items-center border-2'>
        <HookedCounter count={parentCount}/>
      </div>
      <div className='basis-1/3 flex flex-col justify-around items-center border-2'>
        <NonHookedCounter count={parentCount}/>
      </div>
    </div>
  );
}

export default App;
