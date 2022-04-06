import {useState} from 'react';

const App = () => {
  const [variable, setVariable] = useState('World');
  return (
    <div className="App">
      <h1>{`Hello ${variable}!`}</h1>
    </div>
  );
};

export default App;
