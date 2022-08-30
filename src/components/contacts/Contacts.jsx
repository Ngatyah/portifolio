import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xmwd728",
        "template_3acbwdh",
        form.current,
        "jKB53dHmFeT63relZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/* single contact option */}
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ngatyah@outlook.com</h5>
            <a
              href="mailto:davidngatyah@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          {/* end of single contact option  */}
          {/* single contact option */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>David Ngatyah</h5>
            <a
              href="https://m.me/david.n.ngash"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          {/* end of single contact option  */}
          {/* single contact option */}
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+254 721 825 820</h5>
            <a
              href="https://wa.me/254721825820"
              target="_blank"
              rel="noreferrer"
            >
              Send a text
            </a>
          </article>
          {/* end of single contact option  */}
        </div>
        {/* message form  */}
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input
            type="text"
            name="name"
            placeholder="Enter Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="10"
            placeholder="Enter Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
