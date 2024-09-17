// App.tsx
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './Context/useAuth';
import Footer from './Components/Footer/Footer';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = 'findocs';
  }, []);
  
  return (
    <UserProvider>
        <Navbar />
        <Outlet />
        <Footer className="footer" />
        <ToastContainer />
    </UserProvider>
  );
}

export default App;
