import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Footer from './Shared/Footer/Footer';
import NavBar from './Shared/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
