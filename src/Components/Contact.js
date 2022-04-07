import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      var toEmail = `mailto: ${this.props.data.email}`;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="columns">
               <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row fila">
            <div className="contact-card">
               <br></br>
               <a href={toEmail} target="_blank">
                  <img src={"images/send-mail.svg"} alt="mail" width="25" class="icon__card"/>
               </a>
               <br></br>
               <a href={toEmail} target="_blank" class="title__card">E M A I L</a><hr/>
               <a href={toEmail} target="_blank" class="bottom__text">{email}</a><br></br>
               <p></p>
            </div>
         </div>
         <div className="row fila">
            <div className="widget widget_contact">
               <h4>Address and Phone</h4>
               <p className="address">
                  {name}<br />
                  {street} <br />
                  {city}, {state} {zip}<br />
                  <span>{phone}</span>
               </p>
            </div>
         </div>
      </section>
    );
  }
}

export default Contact;
