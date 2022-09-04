// import React, { useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import ContactBox from "../contactBox";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export const SendEmail = (e) => {
//   e.preventDefault();

//   const sendEmailForm = emailjs.sendForm(
//     service_id,
//     template_id,
//     form.current,
//     public_key
//   );

//   const sendPromise = new Promise((resolve) => {
//     resolve(sendEmailForm);
//   });

//   sendPromise.then(
//     (result) => {
//       console.log(result.text);
//       console.log("MMMessage sent!!");
//       e.target.reset();
//     },
//     (error) => {
//       console.log(error.text);
//     }
//   );

//   useEffect(() => {
//     toast.promise(sendPromise, {
//       pending: "Promise is pending",
//       success: "Promise  Loaded",
//       error: "error",
//     });
//   }, []);

//   return (
//     <div>
//       <ContactBox />
//       <form ref={form} onSubmit={sendPromise}>
//         <label>Name</label>
//         <input type="text" name="from_name" placeholder="Beyonce" />
//         <label>Email</label>
//         <input type="email" name="reply_to" placeholder="bee@queen.com" />

//         <label>Message</label>
//         <textarea
//           name="message"
//           placeholder="Awesome site! Are you available for work?"
//         ></textarea>
//         <input
//           className="send_button"
//           type="submit"
//           value="Send"
//           // onClick={notify}
//         />
//         <ToastContainer />
//       </form>
//     </div>
//   );
// };

// export default SendEmail;
