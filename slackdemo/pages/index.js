import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import PrivateRoute from '../client/components/PrivateRoute'
import MainPage from '../client/components/MainPage'

export default function Home() {

  return (
    <PrivateRoute>
      <MainPage/>
    </PrivateRoute>
  )
}
