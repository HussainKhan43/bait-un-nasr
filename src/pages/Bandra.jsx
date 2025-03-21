import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import nodir from "../assets/nodir.png";
import "../pages/Home.css";

function Bandra() {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-img bg-dark text-light py-5">
        <Container>
          <Row>
            <Col className="text-center">
              <h1 className="pt-5 mt-5 display-4 font-weight-bold">
                BANDRA-BRANCH
              </h1>
              <p className="lead mt-3 font-italic">
                Explore our memorable moments and key milestones.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Board of Directors */}
      <section className="mt-5">
        <Container>
          <h2 className="text-center mb-4">Branch Manager</h2>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card shadow-lg rounded">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="font-weight-bold">
                    Mr. Nazir Tamankar
                  </Card.Title>
                  <Card.Text>Branch Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} sm={6} md={4} className="mb-4">
              <Card className="director-card shadow-lg rounded">
                <div className="director-image-container">
                  <Card.Img variant="top" src={nodir} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title className="font-weight-bold">
                    Mr. Rahim Kazi
                  </Card.Title>
                  <Card.Text>Asst Branch Manager</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Branch Statistics Section */}
      <section className="mt-5 py-5">
        <Container>
          <h2 className="text-center mb-4">Branch Statistics</h2>
          <div className="table-responsive">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Statistics</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Number of Active Members</td>
                  <td>1,200</td>
                </tr>
                <tr>
                  <td>Total Number of Deposit Accounts</td>
                  <td>1,500</td>
                </tr>
                <tr>
                  <td>Total Number of Loans Disbursed</td>
                  <td>450</td>
                </tr>
                <tr>
                  <td>Total Share Capital of the Branch</td>
                  <td>₹ 50,00,000</td>
                </tr>
                <tr>
                  <td>Total Deposit of the Branch</td>
                  <td>₹ 75,00,000</td>
                </tr>
                <tr>
                  <td>Total Loan Outstanding of the Branch</td>
                  <td>₹ 35,00,000</td>
                </tr>
                <tr>
                  <td>Total Cumulative Loan Disbursed</td>
                  <td>₹ 80,00,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Bank Information Section */}
      <section className="bank-info mt-5 py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4">Bank Details</h2>
          <Row className="text-center">
            <Col md={6} className="mb-4">
              <ul className="list-unstyled">
                <li>
                  <strong>Bank Name:</strong> Union Bank
                </li>
                <li>
                  <strong>Branch:</strong> Mahim Branch
                </li>
                <li>
                  <strong>IFSC Code:</strong> UBIN0808563
                </li>
                <li>
                  <strong>Account Number:</strong> 510101001095144
                </li>
              </ul>
            </Col>
            <Col md={6} className="mb-4">
              <h3>QR Code</h3>
              <img
                src={nodir}
                alt="Bank QR Code"
                className="img-fluid shadow-lg rounded"
                style={{ maxWidth: "150px" }}
              />
            </Col>
          </Row>

          {/* Moving the Contact Us and Map to the last */}
          <Row className="mt-4">
            <Col md={12}>
              <h3>Contact Us</h3>
              <p>
                <strong>Address:</strong> "Shop No. 24, Zarina Co-op. Hsg. Soc.,
                Bazar Road, Bandra (West), Mumbai – 400050."
              </p>
              <p>
                <strong>Phone Number:</strong> "26430983."
              </p>
              <p>
                <strong>Email:</strong> info@bait-un-nasr.org
              </p>
            </Col>

            <Col md={12} className="mt-4">
              <h4 className="mb-3">Find Us on the Map</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.2427877659593!2d72.8351136749768!3d19.053060082146843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c93c997c7401%3A0x57b8a099e0e1d109!2sZarina%20CO-OP%20Housing%20Society!5e0!3m2!1sen!2sin!4v1739165487064!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Bandra;
