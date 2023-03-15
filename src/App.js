import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/counter/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Widgets from './Widgets';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential) {
        dispatch(login({
          email: userCredential.user.email,
          uid: userCredential.user.uid,
          displayName: userCredential.displayName,
          // display name and profile picture 
      }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);


  return (
    <div className="app">
      {/* Header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app-body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div> 
      )} 
     

    </div>
  );
}

export default App;
