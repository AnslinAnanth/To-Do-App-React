import logo from './logo.svg';
import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import Tasks from './pages/tasks/tasks';
import Completed from './pages/completed/completed';
import Menu from './components/menu/menu';

function Layout(){
  return(
    <div className='mainApp'>
    <div className='menuContainer'>
      <Menu/>
    </div>
    <div className='contentContainer'>
      {/* </Content> */}
      <Outlet/>
    </div>
    </div>

  )
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
        <Route path='/' element={<Tasks/>}/>
        <Route path='/completed' element={<Completed/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
