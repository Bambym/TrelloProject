import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import WebSiteHome from './components/WebSite/WebSiteHome';
import SignIn from './components/Authentification/signIn/SignIn.js'
import SignUp from './components/Authentification/Signup/SignUp.js'
import Dashboard from './components/dashboard/Dashboard.js';
import { initializeApp } from "firebase/app";
import PrivateRoute from './components/PrivateRoute';
import DashboardTable from './components/dashboard/spaceTable/DashboardTable';
import DashboardColumn from './components/dashboard/Table/DashboardColumn.js';


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
        <Route path="/admin/:uid" element={<PrivateRoute element={<Dashboard/>} />}/>
        <Route path="/admin/:uid/espace/:spaceId" element={<PrivateRoute element={<DashboardTable/>} />}/>
        <Route path="/admin/:uid/espace/:spaceId/table/:tableId" element={<PrivateRoute element={<DashboardColumn/>} />}/>
        

      </Routes>
    </Router>

    
  );
}

export default App;
