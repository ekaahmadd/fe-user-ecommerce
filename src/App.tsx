import { BasePage } from './components/BasePage.tsx';
import { routeList } from './routes/route-list';
import { Route, Routes } from 'react-router-dom';
export default function App() {
  return (
    <div className={''}>
      <Routes>
        {
          routeList.map((route) => {
            const Element = route.element;
            return (
              <Route element={
              <BasePage type={route.type}>
                <Element />
                </BasePage>
                } path={route.path} key={route.path} />
            );
          })
        }
        </Routes>
    </div>
  );
}
