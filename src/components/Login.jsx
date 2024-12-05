import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("amanjha@gmail.com");
  const [password, setPassword] = useState("Jhaaman@123");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );

      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data?.error || "something went wrong");
      console.error(err);
    }
  };
  return (
    <div className="card bg-base-300 w-96 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title">LOGIN</h2>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email ID: {emailId}</span>
          </div>
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password:{password}</span>
          </div>
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <p className=" text-red-500"> {error}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn btn-primary" onClick={handleLogin}>
            login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
