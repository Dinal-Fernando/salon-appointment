import React, { Component } from "react";
import alertify from "alertifyjs/build/alertify";
import "alertifyjs/build/css/alertify.min.css";
import "alertifyjs/build/css/alertify.css";
import "alertifyjs/build/css/themes/default.min.css";
import * as BaseService from "../../../BaseService.js";
import { Switch } from 'antd';
import 'antd/dist/antd.css';

import Swal from "sweetalert2";


import {

  Card,
  CardBody,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
} from "reactstrap";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Jumbotron,
  FormGroup,
  Input,
  Label,
  CardHeader,
  Container,
} from "reactstrap";
import Scissor from "../../../assets/Scissor.png";
import AddService from "./AddService";


class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      large: false,
      large1: false,
      dropdownOpen: new Array(6).fill(false),
      showComponent: false,
      serviceName: "",
      servCatergory: "",
      price: "",
      cost: "",
      time: "",
      data:[],
      data2:[],
      data3:[],
      data4:[],
      pageNumber:1,
      limit:10,
      pageCount:null,
      updateId:null,
      loading:true,
    };
 
  }


  componentWillMount = () => {
  


    const url2= "/category/get/";
     BaseService.GetDataWithoutParams(url2)
       .then((res) => {
         
     
         if (res.data.success === true) {
           
           this.setState({
             data2: res.data.data,
           });
          
         } else {
        
           Swal.fire({
             icon: 'error',
             title: 'Oops...',
             text: 'Error loading data!',
             
           })
         }
     
      
     
       })
       .catch((err) => {
        
       Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Error loading data!',
         
       })
       });


      this.receivedData(1,1);


   
  };


  receivedData=(e,index)=>{
    

    console.log("index"+index)
    this.setState({
      pageNumber:index,
      data3:[],
      data4:[]
    },()=>{


      const paramdata= {
        page: this.state.pageNumber, limit: this.state.limit
      };
      const url2= "/service/getbypage/";
    BaseService.GetDataWithParams(url2,paramdata)
      .then((res) => {
        
       
        if (res.data.success === true) {


          this.setState({
            data3: res.data.data,
            pageCount:Math.ceil(res.data.count / this.state.limit),
  
            
          });
          
          console.log("length of limit" + this.state.data3.length);
  
          this.state.data3.map((item) => {
  
            const index1=this.state.data2.findIndex((res)=>{
              
              return res.name===item.category
              
          });
  
            const values = {
              id: item.id,
              name: item.name,
              price:item.price,
              time:item.time,
              category:this.state.data2[index1],
              cost:item.cost,
              slots:item.slots,
              is_active:item.is_active
            };
            this.setState({
              data4: [values,...this.state.data4],
            });
          });

          
        } else {
       
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error loading data!',
            
          })
        }
    
     
    
      })
      .catch((err) => {
       
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error loading data!',
        
      })
      });



    })

  }

  toggleLarge=()=> {
    this.setState({
      large: !this.state.large,
    });
  }

  toggleLarge1=()=> {
    this.setState({
      large: !this.state.large,
    });
  }

  toggle=(i)=> {
    const newArray = this.state.dropdownOpen.map((element, index) => {
      return index === i ? !element : false;
    });
    this.setState({
      dropdownOpen: newArray,
    });
  }
  pass = (servvalue,catvalue,price,cost,time1,id) => {
    this.setState({
      serviceName:servvalue,
      servCatergory: catvalue,
      price: price,
      cost: cost,
      time: time1,
      updateId:id

    })

    // if(time1==="1")
    // {
    //   document.getElementById("time").value="1";
    // }else if(time1==="2")
    // {
    //   document.getElementById("time").value="2";
    // }else if(time1==="3")
    // {
    //   document.getElementById("time").value="3";
    // }else if(time1==="4")
    // {
    //   document.getElementById("time").value="4";
    // }else if(time1==="5")
    // {
    //   document.getElementById("time").value="5";
    // }else 
    // {
    //   document.getElementById("time").value="6";
    // }

    console.log(time1)
  };

  OnChangeHandler=(e)=>{

    this.setState({
      [e.target.name]:e.target.value
    })
  }


  setStatus=(id,isactive,e)=>{
    console.log(isactive)
    let updatestate=""
    
console.log(id)

if(e===true)
{

  updatestate={
    is_active:1
  }

}else if(e===false)
{
  updatestate={
    is_active:0
  }

}
   

    const url = "/service/update/";
    BaseService.UpdateService(url, updatestate,id)
      .then((res) => {
  
       
        
        console.log("response"+res)
        if (res.data.success === true) {
         // this.receivedData(1,1);
        //  Swal.fire(
        //   'Good job!',
        //   'Client successfuly Updated',
        //   'success'
        // );
        this.receivedData(1,1);
        alertify.success("state changed")
  
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          })
        }
      })
      .catch((err) => {
        alertify.alert("Cannot perform the operation");
        console.log("if error"+err);
      });

  }



  updateServiceHandler=(e)=>{

    e.preventDefault();
    const Updateservice = {
      name: this.state.serviceName,
      price: this.state.price,
      cost: this.state.cost,
      
      category_id: parseInt(this.state.servCatergory),
      slots: parseInt(this.state.time),
    };
    document.getElementById("updatebtn").disabled=true;
    document.getElementById("deletebtn").disabled=true;
  
  const url = "/service/update/";
  BaseService.UpdateService(url, Updateservice,this.state.updateId)
    .then((res) => {

     
      
      console.log("response"+res)
      if (res.data.success === true) {
       // this.receivedData(1,1);
       Swal.fire(
        'Good job!',
        'Service successfuly Updated',
        'success'
      );
      document.getElementById("updatebtn").disabled=false;
      document.getElementById("deletebtn").disabled=false;

        this.setState({
          large:false
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })
      }
    })
    .catch((err) => {
      alertify.alert("Cannot perform the operation");
      console.log("if error"+err);
    });
}



deleteservice=()=>{
  document.getElementById("updatebtn").disabled=true;
  document.getElementById("deletebtn").disabled=true;

  const url = "/service/delete/";
  BaseService.DeleteData(url,this.state.updateId)
    .then((res) => {


      console.log("response"+res)
      document.getElementById("updatebtn").disabled=false;
      document.getElementById("deletebtn").disabled=false;

      if (res.data.success === true) {
        this.receivedData(1,1);
    
       

        alertify.success("Successfully deleted service");

        this.setState({
          large:false
        })

      } else {
        Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
      }
    })
    .catch((err) => {
      alertify.alert("Cannot perform the operation");
      console.log("if error"+err);
    });
  
}

  render() {

    const {pageNumber}=this.state;
    return (
      <div className="animated fadeIn">
      <Col>
       
        <Card>
        <CardHeader>
            <h5>
           Client Details</h5>
          </CardHeader>

       
          <CardBody>
            <div className="text-center">
        

              <AddService displayservice={this.receivedData}/>
            </div>

            <Table responsive className="table table-hover hover">
              <thead>
                <tr>
                  <i className="fa fa-reorder fa-lg mt-4"></i>
                  <th>Service Type</th>
                  <th>Average time</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              {this.state.data4.map((item) => (
                <tbody>
                  <tr>
                    <i
                      className="fa fa-edit fa-lg mt-4"
                      onClick={()=>{this.toggleLarge();this.pass(item.name,item.category['id'],item.price,item.cost,item.slots,item.id)}}
                    ></i>
                    <td>{item.name}</td>
                    <td>{item.time} min</td>
                    <td>{item.price}</td>
                    <td><Switch checkedChildren="Active" unCheckedChildren="Deactive" defaultChecked checked={item.is_active} onChange={(e) => this.setStatus(item.id,item.is_active, e)}/></td>

                    {/* <button onClick={this.toggleLarge}>click</button> */}
                  </tr>


         
                </tbody>
              ))}
            </Table>





            <Modal
                    isOpen={this.state.large}
                    toggle={this.toggleLarge}
                    className={"modal-lg " + this.props.className}
                  >
                    {/*table model*/}
                  
          <form onSubmit={this.updateServiceHandler}>
            <ModalHeader toggle={this.toggleLarge}>Edit Service</ModalHeader>
            <ModalBody >
              <Row>
                <Col xs="12" sm="6">
                  <Card style={{ border: "transparent" }}>
                    <CardBody>
                      <FormGroup>
                        <Label htmlFor="serviceName">Service Name</Label>
                        <Input
                          type="text"
                          id="serviceName"
                          name="serviceName"
                          value={this.state.serviceName}
                          placeholder="Enter service name"
                          onChange={this.OnChangeHandler}
                        />
                      </FormGroup>

                      <FormGroup row>
                        <Col md="3">
                          <Label htmlFor="select">catergory</Label>
                        </Col>
                        <Col xs="12" md="9">
                          <Input
                            type="select"
                            name="servCatergory"
                            id="servCatergory"
                            value={this.state.servCatergory}
                            onChange={this.OnChangeHandler}
                          >
                            <option value="0">Select Catergory</option>
                            {this.state.data2.map((item1) => (
                              <option value={item1.id}>{item1.name}</option>
                            ))}
                          </Input>
                        </Col>
                      </FormGroup>
                      <hr />
                      <Jumbotron  fluid style={{borderRadius:"10px"}}>
                        <p
                          style={{
                            color: "grey",
                            textDecoration: "italic",
                            paddingTop: -200,
                            marginLeft:"10px"
                          }}
                        >
                          Add catergory and time
                        </p>
                        <hr />
                        <Container fluid>
                          <FormGroup row className="my-0">
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="city">Cost</Label>
                                <Input
                                  style={{ marginLeft: 10 }}
                                  type="number"
                                  id="cost"
                                  name="cost"
                                  placeholder="LKR"
                                  value={this.state.cost}
                                  onChange={this.OnChangeHandler}
                                />
                              </FormGroup>
                            </Col>
                            <Col xs="6">
                              <FormGroup>
                                <Label htmlFor="lastName">Price</Label>
                                <Input
                                  type="number"
                                  id="price"
                                  name="price"
                                  value={this.state.price}
                                  onChange={this.OnChangeHandler}
                                  placeholder="LKR"
                                />
                              </FormGroup>
                            </Col>
                          </FormGroup>
                          <FormGroup row className="my-0">
                            <Label htmlFor="select" style={{ marginLeft: 10 }}>
                              Time
                            </Label>

                            <Input
                              type="select"
                              name="time"
                              id="time"
                              value={this.state.time}
                              style={{ marginLeft: 10 }}
                              onChange={this.OnChangeHandler}
                            >
                              <option value="">Select Time</option>

                              <option value="1">Slots 1</option>
                              <option value="2">Slots 2</option>
                              <option value="3">Slots 3</option>
                              <option value="4">Slots 4</option>
                              <option value="5">Slots 5</option>
                              <option value="6">Slots 6</option>
                            </Input>
                          </FormGroup>
                        </Container>
                      </Jumbotron>
                    </CardBody>
                  </Card>
                </Col>

                <Col xs="12" sm="6">
                 
                
                      <img src={Scissor} className="img-fluid" alt="img" style={{ paddingTop: 50 }} />
                   
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
       
              <Button id="updatebtn" type="submit" color="success">
                Save
              </Button>
              <Button onClick={()=>this.deleteservice()} id="deletebtn"  color="danger">
                  Delete
                </Button>
              <Button color="secondary" onClick={this.toggleLarge}>
                Cancel
              </Button>{" "}
            </ModalFooter>
          </form>
                  </Modal>
            <Pagination>
              {/* <PaginationItem disabled>
                <PaginationLink previous tag="button">
                  Prev
                </PaginationLink>
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink tag="button" value="1">1</PaginationLink>
              </PaginationItem> */}
  <PaginationItem disabled={pageNumber <= 1}>
              
              <PaginationLink
                onClick={e => this.receivedData(e, pageNumber - 1)}
                previous
                
              />
              
            </PaginationItem>

              {[...Array(this.state.pageCount)].map((page, i) => 
              <PaginationItem active={i === pageNumber-1} key={i}>
                <PaginationLink onClick={e => this.receivedData(e, i+1)}>
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            )}


<PaginationItem disabled={pageNumber >= this.state.pageCount - 2}>
              
              <PaginationLink
                onClick={e => this.handleClick(e, pageNumber + 1)}
                next
               
              />
              
            </PaginationItem>

              {/* <PaginationItem>
                <PaginationLink tag="button">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink tag="button">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next tag="button">
                  Next
                </PaginationLink>
              </PaginationItem> */}
            </Pagination>
          </CardBody>
        </Card>
      </Col>
      </div>
    );
  }
}

export default Services;
