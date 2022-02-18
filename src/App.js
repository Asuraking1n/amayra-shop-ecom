import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import SideSearch from './components/searchSidebar/SideSearch';
import Sidebar from './components/sideBar/Sidebar';

function App() {
  const [isSideSearch,setIsSideSearch] = useState(false)
  const [isSidebar,setIsSidebar] = useState(false)

  return (
    <>
    <Navbar sideSearchView={isSideSearch => setIsSideSearch(isSideSearch)} sideBarView={isSidebar => setIsSidebar(isSidebar)}/>
    {isSideSearch?<SideSearch sideSearchView={isSideSearch => setIsSideSearch(isSideSearch)}/>:null}
    {isSidebar?<Sidebar />:null}
    </>
  );
}

export default App;
