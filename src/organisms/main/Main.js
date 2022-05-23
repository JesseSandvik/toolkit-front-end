import {Routes, Route} from 'react-router-dom';

import { routes } from '../../app/routes';

const Main = () => {
  const routesList = routes.map(({element, path}, index) => (
    <Route element={element} key={index} path={path} />
  ));
  return (
    <main>
      <Routes>{routesList}</Routes>
    </main>
  );
};

export default Main;
