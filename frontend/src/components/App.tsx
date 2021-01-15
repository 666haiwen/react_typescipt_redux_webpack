import React, {useState, useEffect} from 'react';
import './app.css';


function App(): JSX.Element {
  const [state, setstate] = useState(0);
  useEffect(() => {
    console.log('test!!!');
  });
  return (
    <div id='app'>
      React-Redux-Demo
      <div>
        Test for btn: 
        <button className='test-btn' onClick={(): void => setstate(state + 1)}>Click Me!</button>
        Count: {state}
      </div>
    </div>
  );
}

export default App;
