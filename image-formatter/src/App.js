import logo from './logo.svg';
import './App.css';

import { useState, useMemo } from 'react'
import { ImageViewer } from './UI/ImageViewer.js';
import { ImageList } from './UI/ImageList.js';
import { ToolBar } from './UI/ToolBar.js';

function App() {
  return (
    <div className="App">
      <ToolBar></ToolBar>
      <ImageViewer></ImageViewer>
      <ImageList></ImageList>
    </div>
  );
}

export default App;
