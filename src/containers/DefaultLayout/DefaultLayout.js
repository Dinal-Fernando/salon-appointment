import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

import "./style.scss";

import {
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  //AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";




const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));


class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumpDate:new Date()
    }
  
  }


  
onSelectCalendar = (gate) => {
console.log(gate)
  this.setState({
      jumpDate: gate,
      
    })

 
   
}

   loading = () => (
    <div>
     loading
    </div>
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className="app">
        <profile propdate={this.state.jumpDate.toString} />
        <AppHeader fixed>
   
          <Suspense>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
      
            <AppSidebarHeader />
            <AppSidebarForm />
            
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
          
            <AppSidebarFooter />
            <div style={{zIndex:"2",position:"relative"}}>
        <Calendar
                    onChange={this.onSelectCalendar}
                    value={this.state.jumpDate}
                   style={{width:"10px"}}
                  />
          </div>
            {/* <AppSidebarMinimizer /> */}

          </AppSidebar>
          <main className="main">
          <p>{routes.name}</p>
         
            <Container fluid>
            <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component &&localStorage.getItem("AccessToken")!==null ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => <route.component {...props} propdate={this.state.jumpDate.toString()}/>}
                        
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/main" />
                </Switch>
                </Suspense>
            </Container>
          </main>
    
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
