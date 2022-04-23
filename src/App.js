import Footer from './organisms/footer/Footer';
import Header from './organisms/header/Header';
import Main from './organisms/main/Main';

const App = () => {
  return (
    <div className="App">
      <div id="layout">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
