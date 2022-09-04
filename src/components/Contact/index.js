import "./index.scss";
import React, { useState, useEffect, useRef } from "react";
import ContactBox from "../contactBox";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendEmail from "../SendEmail";
import "../SendEmail";
import { MapContainer } from "react-leaflet";
import Map from "../Map/index";

const Contact = () => {
  const service_id = "service_2eqmzxj";
  const template_id = "template_bssaxak";
  const public_key = "dLEIsSAW_vhF5P7go";

  const form = useRef();
  const notifySuccess = () =>
    toast("Thank you for your email!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });

  const notifyFieldsEmpty = () =>
    toast("Enter name, email, and message.", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });

  const notifyEmpty = () =>
    toast(nameMessage + emailMessage + messageMess, {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });

  let nameMessage = "";
  let emailMessage = "";
  let messageMess = "";

  const sendEmail = (e) => {
    e.preventDefault();

    let nameValue = document.forms.myform.from_name.value;
    let emailValue = document.forms.myform.reply_to.value;
    let messageValue = document.forms.myform.message.value;

    console.log("happens earlier");

    if (nameValue == "" || null) {
      console.log("name empty");
      nameMessage = "Enter name. ";
    } else {
      nameMessage = "";
    }
    if (emailValue == "" || null) {
      console.log("email empty");
      emailMessage = "Enter email. ";
    } else {
      emailMessage = "";
    }
    if (messageValue == "" || null) {
      console.log("message empty");
      messageMess = "Enter message. ";
    } else {
      messageMess = "";
    }

    if (
      (emailValue != "" || null) &&
      (nameValue != "" || null) &&
      (messageValue != "" || null)
    ) {
      const sendEmailForm = emailjs.sendForm(
        service_id,
        template_id,
        form.current,
        public_key
      );

      const sendPromise = new Promise((resolve) => {
        resolve(sendEmailForm);
      });

      console.log("below send promise", nameValue);

      sendPromise.then(
        (result) => {
          console.log(result.text, "message sent.");
          notifySuccess();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    } else {
      notifyEmpty();
    }
  }; // end of sendEmail()
  return (
    <div className="contact-container">
      <form name="myform" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="from_name" placeholder="Beyonce" />
        <label>Email</label>
        <input type="email" name="reply_to" placeholder="bee@queen.com" />

        <label>Message</label>
        <textarea
          name="message"
          placeholder="Awesome site! Are you available for work?"
        ></textarea>
        <input
          className="form-submit-button"
          type="submit"
          value="Send"
          // onClick={notify}
        />
        <ToastContainer />
      </form>
    </div>
  );
};

export default Contact;
