import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp" style={{ background: "linear-gradient(to right, #1f4037,rgb(248, 248, 248))", padding: "40px 20px", borderRadius: "10px" }}>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3 style={{ color: "hsla(0, 5.30%, 3.70%, 0.92)", marginBottom: "20px" }}>
                Subscribe to our Newsletter <br /> & Never miss the latest updates
              </h3>
              {status === 'sending' && <Alert variant="info" style={{ color: "#000", backgroundColor: "#FFD700" }}>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger" style={{ color: "#fff", backgroundColor: "#d9534f" }}>{message}</Alert>}
              {status === 'success' && <Alert variant="success" style={{ color: "#000", backgroundColor: "#28a745" }}>{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx" style={{ display: "flex", justifyContent: "space-between" }}>
                  <input 
                    value={email} 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email Address" 
                    style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ddd", width: "70%" }} 
                  />
                  <button 
                    type="submit" 
                    style={{ padding: "10px 20px", backgroundColor: "#99f2c8", color: "#1f4037", border: "none", borderRadius: "5px", cursor: "pointer", marginLeft: "10px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
