import {useState} from 'react';
import Footer from './organisms/footer/Footer';

const App = () => {
  const [variable, setVariable] = useState('World');
  return (
    <div className="App">
      <header>
        <h1>{`Hello ${variable}!`}</h1>
      </header>
      <main></main>
      <Footer />
    </div>
  );
};

export default App;
