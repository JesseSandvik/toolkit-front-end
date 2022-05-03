import {Routes, Route} from 'react-router-dom';

import {appRoutes} from '../../appData/appRoutes';

const Main = () => {
  const routesList = appRoutes.map((route, index) => (
    <Route element={route.element} key={index} path={route.path} />
  ));
  return (
    <main>
      <Routes>{routesList}</Routes>
      <div className="container" id='left'></div>
      <div className="container" id='mid'></div>
      <div className="container" id='right'></div>
    </main>
  );
};

export default Main;
