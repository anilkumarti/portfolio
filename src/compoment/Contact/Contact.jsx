import { useState } from "react";
import emailjs from "@emailjs/browser";

import Styles from "./ContactStyles.module.css";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: "Anil Kumar Tiwari",
    };
    console.log(formattedData)
    emailjs
      .send(
        "service_pn0hejj",
        "template_a1mj99d",
        formattedData,
        "0j8lNORax-WJ9pPoR"
      )
      .then((res) => {
        console.log("Message sent successfully", res.status);
        toast.success("Message sent successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.warning(error);
      });
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <section id="contact" className={Styles.container}>
      <h1 className="sectionTitle"> Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            {" "}
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            {" "}
            Message
          </label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <input type="submit" value='Send'/>
      </form>
    </section>
  );
};

export default Contact;
