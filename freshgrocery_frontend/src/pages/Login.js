import React, {useState} from 'react';

const Login = () => {

    // variables
    const [username,setUsername] =useState("")
    const [password,setPassword]=useState("")

    // // errors variable
    // const [error, setError] = useState({
    //     type: "",
    //     message: ""
    // })

    // //success variable
    // const [success, setSuccess] = useState({
    //     type: ""
    // })

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Username:", username);
        console.log("Password:", password);
    }

    return <div>
        <div className="form-header text-center py-5">
      <h4 className="text-uppercase">Login</h4>
    </div>
    <div>
      <div className="container col-md-6">
        <div className="d-flex justify-content-center align-items-center">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group row py-3">
                <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Username</label>

                <div className="col-md-8">
                  <input id="username" type="text" className="form-control" required name="username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
              </div>

              <div className="form-group row py-3">
                <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>

                <div className="col-md-8">
                  <input id="password" type="password" className="form-control" required name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>

              <div className="form-group row py-3 mb-0">
                <div className="col-md-8 offset-md-4">
                  <button type="submit" className="btn form-btn">
                   Login
                  </button>
                </div>
              </div>
            </form>
            <div className="link d-flex justify-content-center">Not yet signed up?<a className="form-link" href="/register">Register</a></div>
          </div>
        </div>
      </div>
    </div>
    </div>;
}

export default Login;
