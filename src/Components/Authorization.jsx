import React, { useState } from 'react';


const Authorization = () => {
  
    const [formData,setFormData] = useState({
        Name : "",
        Password: "",
        EmailAddress: "",
        ConfirmPassword: "",
       
      });
    
      //state to check if passwords do not match
      const [error,setError] = useState("");
      //state to check if form is submitted or not
      const [submitted,setSubmitted] = useState(false);
    
      function handleSubmit()
      {
        console.log("Form is summited!");
      }

      function handleChange(event)
      {
        const { name, value }  = event.target;
        setFormData((prevData) => (
          {
            ...prevData,
            [name]: value
          }
        ))
    
      }
    
     
    
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center w-75 border p-2">
        {submitted ? (
          <p className="text-center text-success fw-bold">A Verfication Link has been send to your Email.
          Please verify it. Once you Verify, The page automatically load up,</p>
        ) : (
          <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleChange}
                  name="Name"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                  name="Password"
                  value={formData.Password}
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  onChange={handleChange}
                  name="ConfirmPassword"
                  value={formData.ConfirmPassword}
                  placeholder="Confirm Password"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="EmailAddress"
                  onChange={handleChange}
                  placeholder="Email address"
                />
              </div>
           
            
              <div className="mb-1">
                By submitting, you are accepting our <a href="">Terms</a>  & <a href="">Condition</a>
              </div>
              {error && <div className="text-danger">{error}</div>}
              <button type="submit" className="btn btn-primary">
                Proceed
              </button>
            </form>
          </>
        )}
      </div>
      </div>
    );
}

export default Authorization

