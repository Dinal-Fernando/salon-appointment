import React, { Component } from 'react';
import woman from "../../../images/woman.svg";

import Login from "../Login/Login";
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,

  } from "reactstrap";
class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            large: false,
        }
    }

    toggleLarge=()=> {
        this.setState({
          large: !this.state.large,
        });
      }

    render(){
        return( <header className="header trans_400">
        <div className="header_content d-flex flex-row align-items-center justify-content-center trans_400">


            <div className="logo">
                <a href="#">
                    <div>Scissor<span>'N'</span></div>
                    <div>Razor</div>
                </a>
                <div className="hamburger"><div></div><div></div><div></div></div>
            </div>


            <nav className="main_nav">
                <ul className="d-flex flex-row align-items-start justify-content-start">
                    <li className="active"><a href="index.html">Home<div><div></div><div></div><div></div></div></a></li>
                    <li><a href="about.html">About Us<div><div></div><div></div><div></div></div></a></li>
                    <li><a href="services.html">Services<div><div></div><div></div><div></div></div></a></li>
                    <li><a href="articles.html">Articles<div><div></div><div></div><div></div></div></a></li>
                    <li><a href="contact.html">Contact<div><div></div><div></div><div></div></div></a></li>
                </ul>
            </nav>


            <div className="app trans_400"  onClick={()=>{window.location.href="#/login";window.location.reload()}}>
                <div className="app_button_container d-flex flex-row align-items-center justify-content-start">
                    <div className="app_button trans_400 d-flex flex-row align-items-center justify-content-start">
                        <div className="app_button_icon"><img src={woman} alt="https://www.flaticon.com/authors/freepik"></img></div>
                        <div>Click to login</div>
                    </div>
                    <div className="app_button_close">close</div>
                </div>
            </div>


            <Modal
          isOpen={this.state.large}
          toggle={this.toggleLarge}
          className={"modal-lg " + this.props.className}
        >


            <ModalBody>
<Login/>

            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="success" onClick={this.toggleLarge}>
                Save
              </Button>{" "}
              <Button color="secondary" onClick={this.toggleLarge}>
                Cancel
              </Button>
            </ModalFooter>
</Modal>


            {/* <div className="app_content d-flex flex-column align-items-start justify-content-center">
                <div className="app_form_container text-right">
                    <form action="#" id="app_form" className="app_form">
                        <input type="text" className="app_input" placeholder="Full Name" required="required"></input>
                        <input type="email" className="app_input" placeholder="Email Address" required="required"></input>
                        <input type="text" className="app_input" placeholder="Phone Number" required="required"></input>
                        <input type="text" className="app_input" placeholder="Desired Date" required="required"></input>

                        <button className="app_form_button">submit</button>
                    </form>
                </div>
            </div>	 */}
        </div>
    </header>);
    }

}
export default Header;
