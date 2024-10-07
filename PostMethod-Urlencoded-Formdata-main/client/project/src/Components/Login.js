
// import { useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";

// function Login() {
//   let emailInputRef = useRef();

//   let passwordInputRef = useRef();
//   let navigate = useNavigate();

//   let login = async () => {
//     let sendData = new FormData();

//     sendData.append("email", emailInputRef.current.value);
//     sendData.append("password", passwordInputRef.current.value);

//     let requestOptions = {
//       method: "POST",
//       body: sendData,
//     };

//     let jsonData = await fetch("http://localhost:9898/Login", requestOptions);
//     let jsoData = await jsonData.json();
//     if (jsoData.status == "Success") {
//       navigate("/dashboard");
//     } else {
//       alert(jsoData.msg);
//     }
//     console.log(jsoData);
//   };

//   return (
//     <div className="App">
//       <form>
//         <h2>Login</h2>

//         <div>
//           <input ref={emailInputRef} placeholder="Email"></input>
//         </div>

//         <div>
//           <input ref={passwordInputRef} placeholder="Password"></input>
//         </div>

//         <div>
//           <button
//             type="button"
//             onClick={() => {
//               login();
//             }}
//           >
//             Login
//           </button>
//         </div>
//       </form>

//       <br></br>
//       <br></br>
//       <Link to="/signup">
//         <b>Signup</b>
//       </Link>
//     </div>
//   );
// }

// export default Login;


import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'; // Import useDispatch

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  let dispatch = useDispatch(); // Create dispatch

  let login = async () => {
    let sendData = new FormData();
    sendData.append("email", emailInputRef.current.value);
    sendData.append("password", passwordInputRef.current.value);

    let requestOptions = {
      method: "POST",
      body: sendData,
    };

    let jsonData = await fetch("http://localhost:9898/Login", requestOptions);
    let jsoData = await jsonData.json();

    if (jsoData.status === "Success") {
      // Dispatch the login action here
      dispatch({ type: "login", data: jsoData.data });

      // Navigate to dashboard after login
      navigate("/dashboard");
    } else {
      alert(jsoData.msg);
    }
  };

  return (
    <div className="App">
      <form>
        <h2>Login</h2>
        <div>
          <input ref={emailInputRef} placeholder="Email" />
        </div>
        <div>
          <input ref={passwordInputRef} placeholder="Password" />
        </div>
        <div>
          <button type="button" onClick={login}>
            Login
          </button>
        </div>
      </form>
      <br />
      <br />
      <Link to="/signup">
        <b>Signup</b>
      </Link>
    </div>
  );
}

export default Login;
