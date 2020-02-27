import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

const ContactForm = () => {
  return (
    <MDBContainer>

      <MDBRow>
        <MDBCol md="10">
          <MDBCard className="okjii-contact">
            <MDBCardBody>
              <form>
                <input
                  type="text"
                  name="name"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Name"
                />
                <br />
                <input
                  type="text"
                  name="city"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  placeholder="City"
                />
                
                <br />
                <input
                  type="tel"
                  name="tel"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  placeholder="Number"
                />

                <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit">
                    Submit
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactForm;