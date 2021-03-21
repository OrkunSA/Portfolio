import React, { Component } from "react";
import Swal from "sweetalert2";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: "",
      subject: "",
      status: "Submit",
    };
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "contactName") {
      this.setState({ name: event.target.value });
    } else if (field === "contactEmail") {
      this.setState({ email: event.target.value });
    } else if (field === "contactSubject") {
      this.setState({ subject: event.target.value });
    } else if (field === "contactMessage") {
      this.setState({ message: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const templateId = "template_i1o2uei";
    this.sendFeedback(templateId, {
      subject: this.state.subject,
      message: this.state.message,
      name: this.state.name,
      email: this.state.email,
    });
  }

  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_qif15mh", templateId, variables)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    let buttonText = this.state.status;

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form onSubmit={this.handleSubmit.bind(this)} method="POST">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    value={this.state.name}
                    onChange={this.handleChange.bind(this)}
                    size="35"
                    name="contactName"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactEmail"
                    value={this.state.email}
                    onChange={this.handleChange.bind(this)}
                    size="35"
                    name="contactEmail"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    id="contactSubject"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this)}
                    size="35"
                    name="contactSubject"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this)}
                  ></textarea>
                </div>

                <div>
                  <button className="submit">{buttonText}</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>
              </fieldset>
            </form>

            <div id="message-warning"> Error boy</div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {city} <br />
                {state}, {zip}
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href="mailto:c.orkun.s@gmail.com">{email}</a>
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
