import React, {Fragment, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    getAuth,
    onAuthStateChanged,
  
  } from "firebase/auth";
import LoadingAnimation from './LoadingAnimation';
import { useParams } from 'react-router-dom';
const PrivateRoute = ({element}) => {
    
    const auth = getAuth();
    let navigate = useNavigate()
    
    let {uid} = useParams()
    const [ authorized, setAuthorized]=useState(false)
    useEffect(()=>{
        authorized=== false && onAuthStateChanged(auth, (user) => {
          if (user) {
           
                if(user.uid === uid){
                    setAuthorized(true)
                }else{
                    navigate(`/admin/${user.uid}`)
                    setAuthorized(true)
                }
           
           
          }else{
            navigate("/login")
          }
        });
      },[authorized]) // equivalent d'un componentDidMount
    return authorized ? element : <LoadingAnimation isLoading={!authorized}/>
;
};

export default PrivateRoute;
