import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {

  return (
    <div className="app">
      <Header/>
      <div className="main">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
}

export default Layout;