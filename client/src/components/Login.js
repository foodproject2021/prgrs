import {NavLink, useHistory} from 'react-router-dom';
import React, {useState} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {toast} from 'react-toastify';
import '../App.css'
import axios from 'axios';

const inputs = {
    backgroundColor: "#716F81",
    borderRadius:"20px",
    color:"white",
    marginLeft: "0px"
}

var link = {
    margin:"20px",
    padding:"10px",
    color:"white",
    textDecoration:"none"
}

function Login() {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    let history = useHistory();

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await axios.post(`http://localhost:5000/api/login`,{ email, pwd })
            toast.success('Login Successful!', {theme: 'colored'})
            history.push('/home');
        } catch(err){
            console.log(JSON.stringify(err.response))
            if(String(err.response.status)==="400")
                toast.error(err.response.data, {theme:'colored'})
        }            
    }

    return <div className="Login-bg ">
        <div className="container my-auto p-5" >
            <div className="row">
                <div className="col-md-6 mx-auto"  style={inputs} >
                    <div>
                        <h2 style={{color:"#FFDAB9"}} className="m-3" >Welcome Back!</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group m-3">
                                <input type="email" 
                                    placeholder="Enter Email Address" 
                                    className="form-control"
                                    onChange={(e)=> setEmail(e.target.value)}
                                    value={email} required/>
                            </div>
                            <div className = "form-group m-3" >
                                <input type = "password"
                                    className = "form-control"
                                    value={pwd} required
                                    onChange={(e)=> setPwd(e.target.value)}
                                    placeholder = "Enter Password" />
                            </div> 
                            <button type="submit" className="btn btn-primary">Submit</button>                         
                        </form>
                    </div>
                    <div className="m-2 mb-4">
                        <NavLink style={link} exact to="/register" >👉Not a User? Register Here!👈</NavLink>
                    </div>
                </div>
            </div>                                   
        </div>            
    </div>
}

export default Login;