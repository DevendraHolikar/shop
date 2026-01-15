import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const disatch = useDispatch();
  // const navigate = useNavigate()

  const [emailId, setEmailId] = useState("devendra@gmail.com");
  const [password, setPassword] = useState("1234567890");
  const [errorMessage, setErrorMessage] = useState("");

  const validation = () =>{
    if(emailId.trim() === ""){setErrorMessage("Requred") } 
    if(password.trim() === ""){setErrorMessage("Requred") } 
  }

  const handleSubmit = () => {
    console.log(emailId, password);

    validation()
    disatch(addUser({ email: emailId, password: password }));
    // navigate("/about")
  };

  return (
    <div className="flex justify-center">
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email id</legend>
            <input
              onChange={(e) => setEmailId(e.target.value)}
              value={emailId}
              type="text"
              className="input"
              placeholder="Type here"
            />
            {!emailId && <p className="text-red-700">{errorMessage}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="text"
              className="input"
              placeholder="Type here"
            />
            {!password && <p className="text-red-700">{errorMessage}</p>}
          </fieldset>

          <div className="card-actions justify-end mt-2">
            <button onClick={handleSubmit} className="btn btn-primary w-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
