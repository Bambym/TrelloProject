import React, {useEffect,useState} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoadingAnimation from './LoadingAnimation';

const PrivateRoute = ({element}) => {

    const auth = getAuth();
    let navigate = useNavigate()

    const [authorized, setAuthorized] = useState(false);

    let params = useParams() ;

    useEffect( () => {

       authorized === false && onAuthStateChanged(auth,(user)=>{
    
          if(user){

            if(user.uid === params.uid) {
                setAuthorized(true)
            } else {
                navigate(`/dashboard/${user.uid}`)
                setAuthorized(true)
            }

          } else {
              navigate("/login")
          }
    
        })
    
      },[authorized])

  return authorized ? element : <LoadingAnimation type='linear' isLoading={!authorized}/> ;
};

export default PrivateRoute;
