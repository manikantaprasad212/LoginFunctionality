// import React from 'react'
// import Topnavigation from './Topnavigation'
// import { useSelector } from 'react-redux'

// function DashBoard() {
//   let storeObj = useSelector((store)=>{
//     console.log(store);
//     return store;
//   })
//   return (
//     <div>
//       <Topnavigation></Topnavigation>
//     <h2>DashBoard</h2>
//     <h1>{storeObj.loginDetails.firstName}{storeObj.loginDetails.lastName}</h1>
//      <img src = {`http://localhost:9898/${storeObj.loginDetails.profilePic}`}></img>
//     </div>
    
//   )
// }

// export default DashBoard



import React from 'react';
import Topnavigation from './Topnavigation';
import { useSelector } from 'react-redux';

function DashBoard() {
  const storeObj = useSelector((store) => store);

  // Destructure loginDetails safely
  const { loginDetails } = storeObj || {};

  return (
    <div>
      <Topnavigation />
      <h2>DashBoard</h2>
      {loginDetails && loginDetails.firstName ? (
        <>
          <h1>{loginDetails.firstName} {loginDetails.lastName}</h1>
          <img 
            src={`http://localhost:9898/${loginDetails.profilePic}`} 
            alt={`${loginDetails.firstName}'s profile`} 
          />
        </>
      ) : (
        <p>No user data available.</p>
      )}
    </div>
  );
}

export default DashBoard;
