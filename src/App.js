import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
      <div className="app-body">
        <Sidebar />

        {/*feed */}
        {/*widget */}
      </div>
        

    </div>
  );
}

export default App;
