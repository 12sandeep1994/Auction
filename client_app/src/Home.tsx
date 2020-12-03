
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React, { useState } from 'react';
import './App.css';
import { useHistory } from 'react-router-dom'
import Auction from './Auction';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Home() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [registerUserName, setRegisterUserName] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newEmail, setNewEmail] = useState("");

    const handleLogin = async (event: any) => {
        event.preventDefault();
        if (!email || !password) return;

        let serverResponse = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "password": password,
                "email": email
            })
        })

        let responseJson = await serverResponse.json();
        
        if (!responseJson.name) {
            alert("An error occurred");
            return;
        }
        history.push('/auction' , {userName : responseJson.name, userId : responseJson.id});

    }


    const handleRegistration = async (event: any) => {
        event.preventDefault();
        if (!registerUserName || !newPassword || !newEmail) return;

        let serverResponse = await fetch("http://localhost:5000/register", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "clientName": registerUserName,
                "password": newPassword,
                "email": newEmail
            })
        })

        let responseJson = await serverResponse.json();
        if (!responseJson.success) {
            alert(responseJson.errorMessage);
            return;
        }

        alert(responseJson.successMessage + " Please login to continue");
    }

    return (


        <div style= {{ alignItems : 'center'}}>
      <div>
        <br></br>
        <Form>
          <FormGroup>
            <Label for="user"><b>Enter your email </b></Label>
                <Input type="text" name="user" id="user" value={email} style={{width: "25%"}} 
                        onChange={e => setEmail(e.target.value)}/>
                <br></br>
                <Label for="password"><b>Enter your Password </b></Label>
                <Input type="text" name="password" id="password" value={password} style={{width: "25%"}} 
                onChange={e => setPassword(e.target.value)}/>
          </FormGroup>
          <Button color="success" size="lg" onClick={handleLogin}>Login</Button>
        </Form>
      </div>

      <div>
        <br></br>
        <Form>
          <FormGroup>
            <Label for="user"><b>Enter your UserName</b></Label>
                <Input type="text" name="user" id="user" value={registerUserName}
                        onChange={e => setRegisterUserName(e.target.value)} style={{width: "25%"}} 
                        />
                <br></br>
                <Label for="newEmail"><b>Enter your Email</b></Label>
                <Input type="text" name="newEmail" id="newEmail" style={{width: "25%"}} 
                value={newEmail}
                onChange={e => setNewEmail(e.target.value)}
                required/>
                <br></br>
                <Label for="password"><b>Enter your Password</b></Label>
                <Input type="text" name="password" id="password" value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required style={{width: "25%"}} 
                />
          </FormGroup>
          <Button color="success" size="lg" onClick={handleRegistration}>Register</Button>
        </Form>

       
      </div>




{/* 
            <br></br>
            <form onSubmit={handleLogin}>
                
                <label>
                    Email:
        <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
        <input
                        type="text"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>


            <br></br>

            <form onSubmit={handleRegistration}>
                <label>
                    User Name:
        <input
                        type="text"
                        value={registerUserName}
                        onChange={e => setRegisterUserName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password:
        <input
                        type="text"
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Email:
        <input
                        type="text"
                        value={newEmail}
                        onChange={e => setNewEmail(e.target.value)}
                        required
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>*/}


        </div> 
    );
}

export default Home;
