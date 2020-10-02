import React, { Component } from 'react';
import "../../../styles/main_styles.css";
import "../../../styles/responsive.css";
import services from "../../../images/services.jpg";
import mirror from "../../../images/mirror.svg" ;
import index from "../../../images/index.jpg";
import index1 from "../../../images/index1.png";
import Header from "./Header";
import facial from "../../../images/facial-mask.svg";
import makeup from "../../../images/makeup.svg";
import cream from "../../../images/cream.svg";
import makeup2 from "../../../images/make-up.svg";
import testimonial from "../../../images/testimonials.jpg";
import placeholder from "../../../images/placeholder.svg";
import phone from "../../../images/phone-call.svg";
import message from "../../../images/message.svg";
import footer from "../../../images/footer.jpg";
import author_1 from "../../../images/author_1.jpg";
import author_2 from "../../../images/author_2.jpg";
import author_3 from "../../../images/author_3.jpg";


class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            large: false,
        }
    }
    
    componentDidMount=()=>{
        const script = document.createElement("script");
        script.src = "../../../js/custom.js";
        script.async = true;
        document.body.appendChild(script);
    }


    
    render() { 
        return ( <div className="super_container">
	

     
     <Header/>
        
        <div className="menu">
            <nav className="menu_nav">
                <ul className="d-flex flex-column align-items-start justify-content-start">
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="articles.html">Articles</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>


    
       
       
        <div className="home">
    
      
            <div className="home_slider_container">
                <div className="owl-carousel owl-theme home_slider">
                    
                   
                     <div className="owl-item home_slide">
                        <div className="background_image" style={{backgroundImage:`url(${index})`}}></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            <div className="home_title"><h1>The <span>Best</span> Salon appointment scheduler</h1></div>
                                            <div className="home_text">
                                                <p>Schedule appointments as your wish.</p>
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
    




                  
                    <div className="owl-item home_slide">
                        <div className="background_image" style={{backgroundImage:`url(${index})`}}></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            <div className="home_title"><h1>Convinient <span>Appointment</span> Management</h1></div>
                                            <div className="home_text">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum. Ut ac ligula sapien cursus faucibus finibus.</p>
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
    
             



                    <div className="owl-item home_slide">
                        <div className="background_image" style={{backgroundImage:`url(${index1})`}}></div>
                        <div className="slide_text" data-animation-in="fadeIn" data-animation-out="animate-out fadeOut">
                            <div className="slide_title">Our best offers</div>
                            <div className="slide_subtitle">Lorem ipsum dolor sit amet, consectetur</div>
                        </div>
                        <div className="slide_container">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-11">
                                        <div className="slide_content" data-animation-in="fadeInRight" data-animation-out="animate-out fadeOut">
                                            
                                            <div className="home_text">
                                            <div className="home_title"><h1>Responsive <span>Web</span> Design</h1></div>
                                                
                                            </div>
                                            <div className="home_link"><a href="#">View our offers</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
    
        
            <div className="scroll_down scroll_to d-flex flex-column align-items-center justify-content-center" data-scroll-to="#services">
                <div className="scroll_icon"></div>
                <div>Scroll Down</div>
            </div>
    
            
            <div className="slide_progress">
                <div className="slide_num">01.</div>
                <div className="slide_bar"><div></div></div>
            </div>
        </div>
    
        
    
        <div className="services" id="services">
            <div className="parallax_background" data-image-src={services}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="section_title_container">
                            <div className="section_title"><h1>Our Services</h1></div>
                            <p>Our service is to provide appointment scheduling facility for salon industry.</p>
                        </div>
                    </div>
                </div>
                <div className="row services_row">
                    <div className="col">
                        <div className="section_expander">
    
                            <div className="services_slider_container">
                                <div className="owl-carousel owl-theme services_slider">
                                    
                                   
                                    <div className="owl-item">
    
                                        
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src={mirror} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Appointment management</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                       
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src={facial} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Staff management</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                
                                    <div className="owl-item">
                                        
                                    
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon"><div><img src={makeup} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Client management</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_2"><div><img src={cream} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Report generation</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
    
                                  
                                    <div className="owl-item">
                                        
                                      
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_flip"><div><img src={makeup2} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Provide System User Accessibility</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                       
                                        <div className="service d-flex flex-row align-items-center justify-content-start trans_200">
                                            <div className="service_icon service_icon_3"><div><img src={cream} className="svg" alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="service_content">
                                                <div className="service_title trans_200">Keratin Streightening</div>
                                                <div className="service_text trans_200">
                                                    <p>In vitae nisi aliquam, scelerisque leo a, volutpat sem. Vivamus rutrum dui ferme ntum eros hendrerit, id lobortis.</p>
                                                </div>
                                            </div>
                                        </div>
    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
        <div className="testimonials">
            <div className="parallax_background" data-image-src={testimonial}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="section_title_container">
                            <div className="section_title"><h1>Testimonials</h1></div>
                            <p>Donec malesuada lorem maximus mauris sceleri sque, at rutrum nulla dictum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
                <div className="row testimonials_row">
                    <div className="col">
                        <div className="section_expander">
                            
                         
                            <div className="testimonials_slider_container">
                                <div className="owl-carousel owl-theme testimonials_slider">
                                    
                                   
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src={author_1} alt="img"></img></div>
                                                <div className="testimonial_title">The perfect hair</div>
                                                <div className="testimonial_text">
                                                    <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                  
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src={author_2} alt="img"></img></div>
                                                <div className="testimonial_title">I just love my hair</div>
                                                <div className="testimonial_text">
                                                    <p>Mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                   
                                    <div className="owl-item">
                                        <div className="testimonial_container">
                                            <div className="testimonial d-flex flex-column align-items-center justify-content-center text-center trans_200">
                                                <div className="testimonial_image"><img src={author_3} alt="img"></img></div>
                                                <div className="testimonial_title">The best hair salon</div>
                                                <div className="testimonial_text">
                                                    <p>Retiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit.</p>
                                                </div>
                                                <div className="testimonial_author">Jessica Smith, Client</div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="testimonials_more">
                                <div className="testimonials_more_button ml-auto mr-auto trans_200"><a href="#">load more</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  
   
    
        <footer className="footer">
            <div className="parallax_background" data-image-src={footer}></div>
  
            <div className="footer_container">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="section_title_container">
                                <div className="section_title"><h1>Get in touch</h1></div>
                                <p>Maximus mauris sceleri sque, at rutrum nulla dictum.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row footer_row">
                        <div className="col-lg-4 footer_col">
                            <div className="contact_info">
                                <div className="footer_title">Contact Info</div>
                                <div className="contact_info_list">
                                    <ul>
                                        <li className="d-flex flex-row align-items-start justify-content-start">
                                            <div><div className="contact_info_icon"><img src={placeholder} alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">410, 22 Galle Rd, colpittiya 00300</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon"><img src={phone} alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">+94 117 021 540</div>
                                        </li>
                                        <li className="d-flex flex-row align-items-center justify-content-start">
                                            <div><div className="contact_info_icon"><img src={message} alt="https://www.flaticon.com/authors/freepik"></img></div></div>
                                            <div className="contact_info_content">info@spemai.com</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="social">
                                    <ul className="d-flex flex-row align-items-center justify-content-start">
                                        <li><a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="footer_title">Leave a comment</div>
                            <div className="contact_form_container">
                                <form action="#" id="contact_form" className="contact_form">
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Name" className="contact_input" required="required"></input>
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="email" placeholder="E-mail" className="contact_input" required="required"></input>
                                            </div>
                                        </div>
                                    </div>
                                    <div><input type="text" placeholder="Subject" className="contact_input"></input></div>
                                    <div><textarea className="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
                                    <button className="contact_form_button">send message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bar d-flex flex-row align-items-center justify-content-start">
                <div className="copyright">
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | developed <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://spemai.com/" target="_blank">Spemai</a>
   </div>
            </div>
        </footer>
    </div>
     );
    }
}
 
export default Main;