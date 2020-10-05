import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.jpg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};



class DefaultHeader extends Component {

  lockscreen=()=>{
    return <div id="preloder"></div>;
  }
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <div id="lock"></div>
        <p style={{display:"none"}}>{setTimeout(()=>{
            document.getElementById('lock').style.display="none";
        },0)}</p>


        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
         // full={{ src: logo, width: 100, height: 75, alt: 'CoreUI Logo' }}
         full={{ src: logo, width: 100, height: 56, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/saloon/Staff" className="nav-link">Users</Link>
          </NavItem>
        
        </Nav>
        <Nav className="ml-auto" navbar>
   
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
           
              <DropdownItem onClick={()=>document.getElementById('lock').style.display="block"}><i className="fa fa-shield"></i> Lock Screen</DropdownItem>
              <DropdownItem onClick={e => {localStorage.clear();window.location.href="/"}}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>

      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
