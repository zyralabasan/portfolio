import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";
import "../css/Contact.css";

const MessageAlert = ({ message, isVisible }) => {
  if (!isVisible) return null;
  return (
    <div className="message-alert-container">
      <div className="message-alert">
        {message}
      </div>
    </div>
  );
};

//(State)it holds user's data
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  //event handling trigger when user types in the form
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowAlert(false);

    // Simulate a network request, send the form data to backend server
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setAlertMessage("Message sent successfully!");
    setShowAlert(true); // Show alert after setting the message

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });


    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setAlertMessage("");
        setShowAlert(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      label: "Email",
      value: "labasanzyramae24@gmail.com",
      href: "mailto:labasanzyramae24@gmail.com",
    },
    {
      icon: <Phone className="contact-icon" />,
      label: "Phone",
      value: "09356609792",
      href: "tel:09356609792",
    },
    {
      icon: <MapPin className="contact-icon" />,
      label: "Location",
      value: "Isabela, Philippines",
      href: "http://www.sanmateo-isabela.gov.ph/",
    },
  ];

  const socialLinks = [
    { icon: <Github />, href: "https://github.com/zyralabasan" },
    { icon: <Linkedin />, href: "https://www.linkedin.com/in/zyra-mae-labasan-0a18a6357/" },
    { icon: <Instagram />, href: "https://www.instagram.com/zyraugh_?igsh=djM5dzFycDRtcW9q" },
  ];

  return (
    <div className="contact-page page-transition">
      <div className="container-wrapper">
        <MessageAlert message={alertMessage} isVisible={showAlert} />

        <div className="page-header">
          <h1 className="main-title">Get In Touch</h1>
          <p className="subtitle">
            Ready to start a project or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content-grid">
          <div className="contact-form-container">
            <div className="form-card">
              <h2 className="form-title">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group-grid">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="form-input"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello!"
                    className="form-textarea"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? "Sending..." : <>Send Message <Send className="icon-send" /></>}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-info-container">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              <div className="info-list">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="info-item"
                  >
                    {item.icon}
                    <div>
                      <p className="info-label">{item.label}</p>
                      <p className="info-value">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Follow Me</h3>
              <div className="social-links-list">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-button"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="info-card">
              <h3 className="info-title">Availability</h3>
              <div className="availability-list">
                <div className="availability-item">
                  <span className="availability-label">Status</span>
                  <span className="availability-status">Available</span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Response Time</span>
                  <span className="availability-value">Within 24 hours</span>
                </div>
                <div className="availability-item">
                  <span className="availability-label">Time Zone</span>
                  <span className="availability-timezone">PHST (UTC+8)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;