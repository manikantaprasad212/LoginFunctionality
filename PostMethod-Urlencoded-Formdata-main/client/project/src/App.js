
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './Components/DashBoard';
import Tasks from './Components/Tasks';
import Leaves from './Components/Leaves';
import EditProfile from './Components/EditProfile';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Login/>}></Route>
      <Route path ="/signup" element={<Signup/>}></Route>
      <Route path ="/dashboard" element={<DashBoard/>}></Route>
      <Route path ="/tasks" element={<Tasks/>}></Route>
      <Route path ="/leaves" element={<Leaves/>}></Route>
      <Route path ="/editprofile" element={<EditProfile/>}></Route>  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
