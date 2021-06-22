import '../styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import fireBaseClient from 'firebase/client';
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

  const [user, loading, error] = useAuthState(fireBaseClient.auth())

  console.log({ loading, user })

  return (
  <Layout currentUser={user} loading={loading}>
    <Component {...pageProps} currentUser={user} />
  </Layout>
  )
}

export default MyApp
