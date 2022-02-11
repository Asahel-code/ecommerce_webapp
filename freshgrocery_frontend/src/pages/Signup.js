import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

import './Common.css';

const Signup = () => {

  // variables
  const [registerInput, setRegister] = useState({
    firstname:"",
    lastname:"",
    username: "",
    email:"",
    password: "",
    error_list: []
  })

  const[confirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();
  // error variables
  const [error, setError] = useState({
    type: "",
    message: ""
  })

  //success variable
  const [success, setSuccess] = useState({
    type: ""
  })

  const handleInput = (e) =>{
    setRegister({...registerInput, [e.target.name]: e.target.value });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: registerInput.firstname,
      lastname: registerInput.lastname,
      username: registerInput.username,
      email: registerInput.email,
      password: registerInput.password,
      passwordConfirmation: confirmation
    }

    axios.get('sanctum/csrf-cookie').then(response => {
      axios.post(`api/register`, data).then(res => {
        if(res.data.status === 200){
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          swal("Success", res.data.message, "success");
          navigate("/");
        }
        else{
          setRegister({...registerInput, error_list: res.data.validation_errors});
        }

      });
    });

    //password check
    if (registerInput.password === confirmation) {
      setSuccess({
        ...success,
        type: "confirm"
      })
    }
    else {
      setError({
        ...error,
        type: "confirm",
        message: "Please confirm your password!"

      })
    }

  }


  return <div>
    <div className="form-header text-center py-5">
      <h4 className="text-uppercase">Register Today</h4>
    </div>
    <div>
      <div className="container col-md-6">
        <div className="d-flex justify-content-center align-items-center">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group row py-3">
                <label htmlFor="firstname" className="col-md-4 col-form-label text-md-right">First Name</label>

                <div className="col-md-8">
                  <input id="firstname" type="text" className="form-control" name="firstname" value={registerInput.firstname} onChange={handleInput} />

                  <span>{registerInput.error_list.firstname}</span>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="lastname" className="col-md-4 col-form-label text-md-right">Last Name</label>

                <div className="col-md-8">
                  <input id="lastname" type="text" className="form-control" name="lastname" value={registerInput.lastname} onChange={handleInput} />

                  <span>{registerInput.error_list.lastname}</span>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>

                <div className="col-md-8">
                  <input id="username" type="text" className="form-control" name="username" value={registerInput.username} onChange={handleInput} />

                  <span>{registerInput.error_list.username}</span>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div className="col-md-8">
                  <input id="email" type="email" className="form-control" name="email" value={registerInput.email} onChange={handleInput} />

                  <span>{registerInput.error_list.email}</span>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                <div className="col-md-8">
                  <input id="password" type="password" className="form-control" name="password" value={registerInput.password} onChange={handleInput} />

                  <span>{registerInput.error_list.password}</span>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>

                <div className="col-md-8">
                  <input id="password-confirm" type="password" className="form-control" name="confirm_password" value={confirmation} onChange={(e)=> setPasswordConfirmation(e.target.value)} />
                </div>
              </div>

              <div className="form-group row py-3">
                <div className="col-md-8">
                  {(error.message !== "" && error.type === "confirmation") && <>
                    <span className="alert alert-danger alert-block">{error.message}</span>
                  </>}
                </div>

              </div>

              <div className="form-group row py-3 mb-0">
                <div className="col-md-8 offset-md-4">
                  <button type="submit" className="btn form-btn">
                    Register
                  </button>
                </div>
              </div>
            </form>
            <div className="link d-flex justify-content-center">Already have an account?<a className="form-link" href="/login">Login now</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Signup;
