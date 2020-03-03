import React from 'react';
import { MDBCard, MDBCardText, MDBContainer } from "mdbreact";
import faqimg02 from '../img/faq/faqimg02.png';
import faqimg03 from '../img/faq/faqimg03.png';
import faqimg04 from '../img/faq/faqimg04.png';
import faqimg05 from '../img/faq/faqimg05.png';

const FaqCards = () => {
return (
<MDBContainer>
  <MDBCard className="card-body" style={{ width: "18rem", marginTop: "1rem"  }}>
    <MDBCardText><img src={faqimg02} alt="" width="10%" height="10%" /> Create Store
    
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "18rem", marginTop: "1rem" }}>
    <MDBCardText><img src={faqimg03} alt="" width="10%" height="10%" /> Offer
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "18rem", marginTop: "1rem" }}>
    <MDBCardText><img src={faqimg04} alt="" width="10%" height="10%" /> Refer &amp; Earn
    </MDBCardText>
    
  </MDBCard>
  <MDBCard className="card-body" style={{ width: "18rem", marginTop: "1rem" }}>
    <MDBCardText><img src={faqimg05} alt="" width="10%" height="10%" /> Nearby Shop
    </MDBCardText>
    
  </MDBCard>

</MDBContainer>
);
};

export default FaqCards;