import React, {useState} from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [show, setShow] = useState(false);

  function sendEmail(e) {

    emailjs.sendForm("service_6c0ueaj", "template_8elz8w7", e.target,
      "user_Dw8dIBmPMSqdXhp89AVj0")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <h2>Mail me</h2>
      <div>
        <label>Name<input type="text" name="user_name"/></label>

      </div>
      <div>
        <label>Email<input type="email" name="user_email"/></label>
      </div>
      <div style={{display: "flex", alignItems: "center"}}>
        <label>Message</label>
        <textarea name="message"/>
      </div>
      <input type="submit" value="Send"/>
    </form>

  );
};

export default Contact;