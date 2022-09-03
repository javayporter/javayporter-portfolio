import "./index.scss";
import React, { useState, useEffect, useRef } from "react";
import ContactBox from "../contactBox";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendEmail from "../SendEmail";
import "../SendEmail";

const Contact = () => {
  const service_id = "service_2eqmzxj";
  const template_id = "template_bssaxak";
  const public_key = "dLEIsSAW_vhF5P7go";

  const form = useRef();
  const notify = () =>
    toast("Thank you for your email!", {
      position: toast.POSITION.TOP_CENTER,
      className: "toast-message",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    const sendEmailForm = emailjs.sendForm(
      service_id,
      template_id,
      form.current,
      public_key
    );

    const sendPromise = new Promise((resolve) => {
      resolve(sendEmailForm);
    });

    sendPromise.then(
      (result) => {
        console.log(result.text, "message sent.");
        notify();
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div>
      <ContactBox />
      <form ref={form} onSubmit={sendEmail}>
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
          className="send_button"
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
