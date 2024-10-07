import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";

function Signup() {
  let profilePicInputRef = useRef();
  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let ageInputRef = useRef();
  let emailInputRef = useRef();
  let mobileNoInputRef = useRef();
  let passwordInputRef = useRef();

  let [ProfilePic, setProfilePic] = useState("./images/no image.png");

  let onSignupFormData = async () => {
    let dataTosend = new FormData();

    for (let i = 0; i < profilePicInputRef.current.files.length; i++) {
      dataTosend.append("profilePic", profilePicInputRef.current.files[i]);
    }
    dataTosend.append("firstName", firstNameInputRef.current.value);
    dataTosend.append("lastName", lastNameInputRef.current.value);
    dataTosend.append("age", ageInputRef.current.value);
    dataTosend.append("email", emailInputRef.current.value);
    dataTosend.append("mobileNo", mobileNoInputRef.current.value);
    dataTosend.append("password", passwordInputRef.current.value);

    let reqOptions = {
      method: "POST",
      body: dataTosend,
    };

    let JSONData = await fetch("http://localhost:9898/signup", reqOptions);
    let JSOData = await JSONData.json();
    console.log(JSOData);
    alert(JSOData.message);
  };
  return (
    <div className="App">
      <form>
        <h2 className="signup">Signup</h2>
        <div>
          <label>Upload Profile pic</label>
          <input
            ref={profilePicInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={(eventObj) => {
              let selectedImagePath = URL.createObjectURL(
                eventObj.target.files[0]
              );

              setProfilePic(selectedImagePath);
            }}
          ></input>
          <br></br>
          <img class="profilePicPreview" src={ProfilePic}></img>
        </div>
        <div>
          <input ref={firstNameInputRef} placeholder="FirstName"></input>
        </div>
        <div>
          <input ref={lastNameInputRef} placeholder="LastName"></input>
        </div>
        <div>
          <input ref={ageInputRef} placeholder="Age"></input>
        </div>
        <div>
          <input ref={emailInputRef} placeholder="Email"></input>
        </div>
        <div>
          <input ref={mobileNoInputRef} placeholder="Mobile No"></input>
        </div>
        <div>
          <input ref={passwordInputRef} placeholder="Password"></input>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              onSignupFormData();
            }}
          >
            Signup
          </button>
        </div>
      </form>

      <br></br>
      <br></br>
      <Link to="/">
        <b>Login</b>
      </Link>
    </div>
  );
}

export default Signup;
