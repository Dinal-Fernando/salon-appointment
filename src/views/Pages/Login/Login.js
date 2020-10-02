import React, { Component } from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import * as BaseService from "../../../BaseService.js";

import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import Swal from 'sweetalert2'
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  position: absolute;
  margin-top: -13px;
	margin-left: -13px;
  left: 50%;
  top: 50%;
`;
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:"",
      loading:false
    }
  }
  


  onChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })

  }

  onSubmitHandler=(e)=>{
    this.setState({
      loading:true
    })
    e.preventDefault();
    const login={
      username:this.state.username,
      password:this.state.password
    }
   
    const url = "/user/varify/";
BaseService.PostServiceWithoutHeader(url, login)
  .then((res) => {
    
    this.setState({
      loading:false
    })

    if (res.data.success === true) {
     
      localStorage.setItem('AccessToken',res.data.Access_Token);
      localStorage.setItem('RefreshToken',res.data.Refresh_Token);
      localStorage.setItem('type',res.data.type);
      
      
    
      alertify.success("Successfully logged in");

window.location.href="/#/dashboard";

    } else {
      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid Credentials!',
        
      })
    }

 

  })
  .catch((err) => {
   
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Invalid Credentials!',
    
  })
  });
  }
  render() {
    return (
      <div>
                    
      <div className="app flex-row align-items-center">

               <div className="sweet-loading text-center" style={{zIndex:"5"}}>
        <ClockLoader
          css={override}
          size={75}
          color={"#123abc"}
          loading={this.state.loading}
        />
      </div>
         
        <Container>
      

    
      
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.onSubmitHandler}>
                      <h1>Login to proceed</h1>
                      <p className="text-muted">Sign In to your account</p>
      
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" name="username" value={this.state.username} onChange={this.onChangeHandler} required/>
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" name="password" value={this.state.password} onChange={this.onChangeHandler} required/>
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0" onClick={()=>{window.location.href="#/forgotpassword"}}>Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
      </div>
      
    );
  }
}

export default Login;
