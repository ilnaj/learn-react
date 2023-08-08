import React, { useState } from 'react';
import Content from './components/Header/Content';
import Menu from './components/Header/Menu'
import './App.css'

function App() {
      const [idMenu, setIdMenu] = useState('expense');

      function clickMenuHandler(id) {
        setIdMenu(id);
      }

  return (
    <div>
      <Menu onClickMenu={clickMenuHandler} activeMenu={idMenu}></Menu>
      <Content idMenu={idMenu}></Content>
    </div>
  );
}

export default App;
