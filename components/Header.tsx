import fireBaseClient from "firebase/client";
import React from "react";

interface Props {

}

const Header = (props: Props) => {

  const logout = () => {
    fireBaseClient.auth().signOut()
  }

  return (
    <div className="mt-16 flex justify-end w-full">
      <button 
        className="bg-transparent text-white font-semibold hover:text-yellow-800 py-2 px-4 border-yellow-200 hover:border-yellow-800 rounded"
        onClick={logout}
        >
        Logout
      </button>
    </div>
    )
};

export default Header;