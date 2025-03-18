import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import Notification from "./Notification";

const ContactForm = () => {
  const form = useRef();
  const [notification, setNotification] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8zszmf", // Replace with your Service ID
        "template_jfk1s5b", // Replace with your Template ID
        form.current,
        "TWlEI25xa5TECZJ2c" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setNotification({
            message: "Message sent successfully!",
            bgColor: "bg-[#32F900]",
            textColor: "text-[#121212]",
          });
          form.current.reset();
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setNotification({
            message: "Failed to send message!",
            bgColor: "bg-red-500",
            textColor: "text-white",
          });
        }
      );

    // Hide the notification after 2 seconds
    setTimeout(() => setNotification(null), 5000);
  };

  return (
    <div>
      {/* Notification Component */}
      <Notification
        message={notification?.message}
        bgColor={notification?.bgColor}
        textColor={notification?.textColor}
      />

      {/* Contact Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="border border-[#ffffff25] rounded-lg p-4 hover:shadow-[0px_0px_6px_#32F900] transition-shadow duration-700 text-[#979EA9]"
      >
        <div className="flex flex-wrap gap-3">
          <div className="flex-grow">
            <label className="leading-10 text-lg" htmlFor="name">
              Name *
            </label>
            <br />
            <input
              name="name"
              className="text-[#F6F6F6] w-full md:w-64 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32F900] rounded-lg border border-[#ffffff25] bg-[#0000008f]"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="flex-grow">
            <label className="leading-10 text-lg" htmlFor="email">
              Email *
            </label>
            <br />
            <input
              name="email"
              className="text-[#F6F6F6] w-full md:w-64 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#32F900] rounded-lg border border-[#ffffff25] bg-[#0000008f]"
              type="email"
              required
            />
          </div>
        </div>
        <div className="my-2">
          <label className="leading-10 text-lg" htmlFor="text">
            Message *
          </label>
          <br />
          <textarea
            name="message"
            className="text-[#F6F6F6] resize-none overflow-hidden rounded-lg border border-[#ffffff25] bg-[#0000008f] w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#32F900]"
            rows="5"
            placeholder="Enter your message..."
            required
          ></textarea>
        </div>
        <Button
          content={"Send Message"}
          bgColor={"#32F900"}
          color={"#121212"}
          borderColor={"#32F900"}
          hoverBgColor={"#F6F6F6"}
          responsive={false}
          width={"100%"}
        />
      </form>
    </div>
  );
};

export default ContactForm;
