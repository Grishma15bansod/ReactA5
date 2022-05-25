
import './App.css';
import Home from './Routing/Home';
import Student from './Routing/Student';
import Cont from './Routing/Cont';
import Nav from './Routing/Nav';
import NoPage from './Routing/NoPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav/>
     {/* <Home/>
     <Student/>
     <Cont/> */} 
     <Routes>
       <Route path='/' element={<Navigate to='/home'/>}/>
       <Route path='/Nav' element={<Nav/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/Student' element={<Student/>}/>
        <Route path='/Cont' element={<Cont/>}/>
        <Route path='/*' element={<NoPage/>}/>
     </Routes>

    </div>
  );
}

export default App;
