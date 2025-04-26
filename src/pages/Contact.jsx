import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [state, handleSubmit] = useForm("mdkgkzjz"); // Your Form ID here

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h2 className="text-3xl font-bold">Thanks for contacting me!</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-10">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 justify-items-center">

        {/* Left Side - Contact Info */}
        <div className="space-y-6 flex flex-col items-start justify-center pr-10">
          <h2 className="text-3xl font-bold text-left">Contact Information</h2>
          <p><span className="font-semibold">Email:</span> mhmmdkaif843@gmail.com</p>
          <p><span className="font-semibold">Phone:</span> +91 8589954772</p>
          <p><span className="font-semibold">Location:</span> Kozhikode, Kerala</p>

          <div className="flex space-x-4 mt-6 text-2xl">
            <a href="https://github.com/mhmmdkaif" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-[#D4C9BE] transition-transform transform hover:scale-110" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#D4C9BE] transition-transform transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-kaif-a-r-110288253/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-[#D4C9BE] transition-transform transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-lg">
          <h2 className="text-3xl font-bold text-center">Send a Message</h2>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-[#1C1C1C] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D4C9BE]"
          />
          <ValidationError field="name" prefix="Name" errors={state.errors} />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-[#1C1C1C] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D4C9BE]"
          />
          <ValidationError field="email" prefix="Email" errors={state.errors} />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 bg-[#1C1C1C] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-[#D4C9BE]"
          ></textarea>
          <ValidationError field="message" prefix="Message" errors={state.errors} />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#123458] hover:bg-[#D4C9BE] hover:text-black transition-all py-3 px-6 rounded text-white font-semibold"
          >
            {state.submitting ? "Sending..." : "Send"}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
