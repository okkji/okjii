import React from "react";
import { MDBCol, MDBContainer, MDBIcon, MDBRow, MDBFooter } from "mdbreact";
import paytm from '../img/paytm.png';
import bhim from '../img/bhim.png';
import MasterCard from '../img/MasterCard.png';
import Maestro from '../img/Maestro.png';
import paypal from '../img/paypal.png';
import visa from '../img/visa.png';



const FooterPage = () => {
  return (
    <MDBFooter color="green" className="font-small pt-5 mt-4">
      <MDBContainer className=" container-fluid ml-5">
        <MDBRow>
          <MDBCol className="footer-bdr-right"  lg="3" md="4" sm="6" size="12">
            <h5 className="title">MENU</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="/">ABOUT US</a>
              </li>
              <li className="list-unstyled">
                <a href="/"> JOIN AS RETAILER</a>
              </li>
              <li className="list-unstyled">
                <a href="/">BLOG</a>
              </li>
              <li className="list-unstyled">
                <a href="/"> CAREER
</a>
              </li>
              <li className="list-unstyled">
                <a href="/">OFFERS</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">REFER &amp; EARN</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  lg="3" md="4" sm="6" size="12">
            <h5 className="title">HELP</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!">HELP CENTER
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">CONTACT US</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">TERMS &amp; CONDITION</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> PRIVACY POLICY
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">REFUND POLICY</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">DISCLAIMER</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="footer-bdr-right"  lg="3" md="4" sm="6" size="12">
            <h5 className="title">CATEGORIES</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!">BEVERAGES
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">GRAINS, PULSES &amp; FLOUR</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FOODS &amp; DRINKS</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"> DAIRY &amp; EGGS
</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">SNACKS</a>
              </li>

              <li className="list-unstyled">
                <a href="#!">PERSONAL CARE</a>
              </li>

            </ul>
          </MDBCol>
          <MDBCol className="bdr-font" lg="3" md="4" sm="6" size="12">
            <h5 className="title">FIND US ONLINE</h5>
            <ul className="list-unstyled">
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="facebook" className="mr-2" /> FACEBOOK</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="twitter-square"  className="mr-2" /> TWITTER</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="linkedin"  className="mr-2" /> LINKEDIN</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="instagram"  className="mr-2" /> INSTAGRAM</a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><MDBIcon fab icon="youtube-square"  className="mr-2" /> YOUTUBE</a>
                </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright mt-3 ml-5  py-3">
        <MDBContainer fluid >
        <p class="cite-text">For best of prices, deals and oﬀers; order online in cities<br /> The delivery service is operational in 13 cities: Ahmedabad, Bengaluru, Chennai, Delhi, Gurugram, Hyderabad, Jaipur, Kanpur, Kolkata, Lucknow, Noida, Mumbai, and Pune.<br /> 
        </p>
        <p class="mt-1"><b>Payment Options</b></p>

        <div className="d-flex align-content-stretch flex-wrap example-parent">
    <div className="p-2 col-example"><a href="/"><img src={visa} alt="store"  className="img-icon img-fluid" /> </a></div>
    <div className="p-2 col-example"><a href="/"><img src={Maestro} alt="store" className="img-icon img-fluid" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={paytm} alt="store" className="img-icon img-fluid"/></a></div>
    <div className="p-2 col-example"><a href="/"><img src={MasterCard} alt="store" className="img-icon img-fluid" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={paypal} alt="store" className="img-icon" /></a></div>
    <div className="p-2 col-example"><a href="/"><img src={bhim} alt="store" className="img-icon" /></a></div>
    <div className="p-2 col-example"><a href="/"> Net Banking</a></div>
    <div className="p-2 col-example"><a href="/"> Cash on Delivery </a></div>
    <div className="p-2 col-example"><a href="/"> Udhaar</a></div>
      </div>


          
  </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;