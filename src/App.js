import Footer from './organisms/footer/Footer';
import Header from './organisms/header/Header';
import Main from './organisms/main/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <div id="layout">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
