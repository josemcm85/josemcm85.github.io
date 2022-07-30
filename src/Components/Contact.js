import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import emailjs from "@emailjs/browser";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const titleMessage = this.props.data.contactmessage;
    const form = this.myRef;

    let from_name = "";
    let reply_to = "";
    let subject = "";
    let message = "";

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs
        .sendForm(
          "service_si6v4de",
          "template_wsf6swj",
          form.current,
          "UTgkpiCwGcF5wZ8qa"
        )
        .then(
          (result) => {
            alert("Email sent successfully.");
            e.target.reset();
          },
          (error) => {
            alert(JSON.stringify(error));
          }
        );
    };

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{titleMessage}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contactForm"
                name="contactForm"
                encType="text/plain"
              >
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="from_name"
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="reply_to"
                    required={true}
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="subject"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="10"
                    id="contactMessage"
                    name="message"
                    required={true}
                  ></textarea>
                </div>

                <div>
                  <input type="submit" className="submit" value="Submit" />

                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide left duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
