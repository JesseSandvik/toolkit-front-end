import {Routes, Route} from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';

import {appRoutes} from '../../appData/appRoutes';

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element=<HomePage /> />
      </Routes>
    </main>
  );
};

export default Main;
