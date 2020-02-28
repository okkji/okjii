import React, { Component } from 'react'
import {MDBIcon} from "mdbreact";
import img2 from '../img/retailer/img2.png';

export default class HomeDelivery extends Component {
  render() {
    return (
      <div className="container-fluid my-2 bg-purple">
        <section className="okjii-create-store container">
        <div class="row">
        <div className="col-lg-5 col-md-4 col-12">
            <figure class="home-delivery-figure-img my-5">
              <img src={img2} alt="Create Your Shop" className="img-fluid img2" />
            </figure>
          </div>
          <div className="col-lg-7 col-md-4 col-12">
            <h1 className="my-5"><b>Create</b> Your Shop
</h1>
            <p>Digital presence is the inevitability of today’s word whether it is business or individuality. Association with OkkJi not only associates you with the huge network of customers and shops but provides digital appearance also.</p>
            <ul className="list-unstyle">
                <li> 
                <p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Enlist all items that you used to sell  </p></li>
                <li><p> <MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Create an account to partner with us</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Showcase your sellable items digitally</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Increase sell &amp; customer base in your locatio</p></li>
                <li><p><MDBIcon icon="check-square" size="2x" className="indigo-text pr-1 my-0" /> Innovative ideas &amp; rewards to increase sell with huge network</p></li>
              </ul>
    

 
          </div>
        </div>
        </section>
        
      </div>
    )
  }
}