import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import WebSiteHome from './components/WebSite/WebSiteHome';
import SignIn from './components/Authentification/signIn/SignIn';
import SignUp from './components/Authentification/signUp/SignUp';
import {Dashboard} from './components/Admin/Dashboard'


import { initializeApp } from "firebase/app";
import PrivateRoute from './components/PrivateRoute';

const firebaseConfig = {
  apiKey: "AIzaSyCGRUqj42db9BeNPPOxKihY73pT93d0r9k",
  authDomain: "trello-project-bac7d.firebaseapp.com",
  projectId: "trello-project-bac7d",
  storageBucket: "trello-project-bac7d.appspot.com",
  messagingSenderId: "446819331212",
  appId: "1:446819331212:web:6348faa3ccdfce9b769fa9",
};

initializeApp(firebaseConfig)

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<WebSiteHome/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/dashboard/:uid" element={<PrivateRoute element={<Dashboard/>}/>} />
      </Routes>
    </Router>

    
  );
}

export default App;
