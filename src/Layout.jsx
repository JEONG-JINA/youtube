import Header from './components/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="box-border pt-5 pb-5 pl-10 pr-10">
        <Outlet />
      </main>
    </>
  );
};