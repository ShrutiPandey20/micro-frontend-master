import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  import {FaTwitter} from 'react-icons/fa';
  import {FaYoutube} from 'react-icons/fa';
  import {FaInstagram} from 'react-icons/fa';
  import './Footer.css';
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color:  "White", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        TEAM 2
      </h1>
      <h3 style={{ color:  "white", 
                   textAlign: "center", 
                   marginTop: "30px"}}>Made by Shruti , Priyanka and Nishu </h3>
     <hr style={{width: "100%" ,textAlign: "center",marginLeft: "0", color: "white"}}></hr>
     <div>
     <i className="fa-youtube"><FaYoutube/></i> 
     <i className="fa-twitter"><FaTwitter/></i> 
     
     <i className="fa-instagram"><FaInstagram/></i> 
     </div>
     <hr style={{width: "100%" ,textAlign: "center",marginLeft: "0", color: "white"}}></hr>
     <span >
     <br/>
     <FooterLink> <span style={{ 
                   marginLeft: "550px",
     }}> Terms of use</span></FooterLink>&nbsp;&nbsp;&nbsp;
     <FooterLink> <span> Privacy Policy</span></FooterLink>&nbsp;&nbsp;&nbsp;
     <FooterLink> <span> Feedback</span></FooterLink>&nbsp;&nbsp;&nbsp;
     <FooterLink> <span> Report an issue </span></FooterLink>&nbsp;&nbsp;&nbsp;
     <FooterLink> <span> Sitemap</span></FooterLink>&nbsp;&nbsp;&nbsp;
     <FooterLink> <span> FAQs</span></FooterLink>
     </span>
     <hr style={{width: "100%" ,textAlign: "center",marginLeft: "0", color: "white", marginTop: "20px"}}></hr>
    </Box>
  );
};
export default Footer;