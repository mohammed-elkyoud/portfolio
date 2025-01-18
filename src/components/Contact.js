import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);

      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully!" });
      } else {
        setStatus({
          success: false,
          message: "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonText("Send");
      setStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    }

    setTimeout(() => {
      setStatus({});
    }, 5000);
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{
        background: "linear-gradient(to right, #1f4037, #99f2c8)",
        color: "#fff",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                  style={{
                    maxWidth: "100%",
                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                  }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 style={{ marginBottom: "20px", color: "#FFD700" }}>
                    Let's Work Together
                  </h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {["firstName", "email", "phone", "subject"].map((field, index) => (
                        <Col size={12} sm={6} className="px-1 mb-3" key={index}>
                          <input
                            type={field === "email" ? "email" : "text"}
                            value={formDetails[field]}
                            placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                            onChange={(e) => onFormUpdate(field, e.target.value)}
                            style={{
                              borderRadius: "5px",
                              border: "1px solid #ccc",
                              padding: "10px",
                              width: "100%",
                            }}
                          />
                        </Col>
                      ))}
                      <Col size={12} className="px-1 mb-3">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                          style={{
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            padding: "10px",
                            width: "100%",
                          }}
                        />
                      </Col>
                      <Col size={12} className="px-1 mb-3">
                        <button
                          type="submit"
                          style={{
                            background: "#FFD700",
                            color: "#333",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s",
                          }}
                          onMouseOver={(e) => (e.target.style.background = "#ffae00")}
                          onMouseOut={(e) => (e.target.style.background = "#FFD700")}
                        >
                          {buttonText}
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={status.success === false ? "danger" : "success"}
                            style={{
                              color: status.success ? "#28a745" : "#dc3545",
                            }}
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
