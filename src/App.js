import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './Home/Home/Home';
import AddCycle from './Pages/AddCycle/AddCycle';
import Blog from './Pages/Blog/Blog';
import CycleDetail from './Pages/CycleDetail/CycleDetail';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageCycle from './Pages/ManageCycle/ManageCycle';
import SignUp from './Pages/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/NavBar/NavBar';
import Notfound from './Shared/NotFound/Notfound';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/addcycle' element={
          <RequireAuth>
            <AddCycle></AddCycle>
          </RequireAuth>
        }></Route>
        <Route path='/managecycle' element={
          <RequireAuth>
            <ManageCycle></ManageCycle>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/cycle/:cycleId' element={
          <RequireAuth>
            <CycleDetail></CycleDetail>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
