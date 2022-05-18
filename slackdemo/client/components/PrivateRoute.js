import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded,isEmpty } from 'react-redux-firebase'
import Router from 'next/router';
import { useRouter } from 'next/router'
const PrivateRoute = ({children, ...rest}) => {
  const auth = useSelector((state) => state.firebase.auth)
  const router = useRouter()

  return (

     isLoaded(auth) && !isEmpty(auth) ? children : <div>Loading</div>


  );
};

export default PrivateRoute;
