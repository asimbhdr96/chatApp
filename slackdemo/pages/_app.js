import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import firebase from '../firebase';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer
} from 'react-redux-firebase'
import store from '../client/store/index.js'
import { useSelector } from 'react-redux';
import PrivateRoute from '../client/components/PrivateRoute'
import { useRouter } from 'next/router';
const rrfConfig = {
  userProfile: 'users'

}


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch

}



function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        router.push('/')
      }else{
        console.log('else')
        router.push('/login')
      }
    })
  },[])
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>

          <Component {...pageProps} />

      </ReactReduxFirebaseProvider>
    </Provider>
  )
}

export default MyApp


