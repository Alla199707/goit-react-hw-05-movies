import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (
    <div
      style={{
        padding: '15px',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};