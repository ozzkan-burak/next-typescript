import React from "react";
import fireBaseClient from '../firebase/client';
import Header from '@/components/Header';

export interface LayoutProps {
  currentUser: fireBaseClient.User;
  loading: boolean;
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({currentUser, loading, children}) => {
  return (
    <div className="min-h-screen bg-yellow-500">
      <div>{loading ? <h1>Yükleniyor...</h1>: 
      <>
        {currentUser && <Header />}
        <main>{children}</main>
      </>
      }</div>
    </div>
  );
}

export default Layout