import React from "react";
import { Card, Button , Row , Col} from "react-bootstrap";
import { Link } from "react-router-dom"

const ScholarshipTypes = () => {



  return (
    <>
      <section id="services">
        <div className="container service-section">
          <br />
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Merit Based Scholarship</span>
                    <p>
                    A merit-based scholarship is an award given to high performing students. It is based entirely on your merit in either academics, sports, leadership activity, community service, artistic, or other special interests rather than your need for financial aid.
                    </p>
                    <Link to={"/merit-based-scholarships"}>
                      <Button variant="primary" style={{ width: "200px" }}>
                        View Scholarships
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Need Based Scholarship</span>
                    <p>
                    A need based scholarship is basically a financial aid provided for students who cannot afford to pay for tuition without regard to any other factor. A student can qualify for a need based scholarship when  meets the eligibility criteria which are solely based on assets and income.
                    </p>
                    <Link to={"/need-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>International Scholarships</span>
                    <p>
                    Scholarships funded by global and regional organizations allow you to study at any country or a wide selection of countries. Due its nature, distance learning scholarships allow you to pursue international studies in your own country or wherever you may be
                    </p>
                    <Link to={"/international-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
          <Row>
          <div
            className="grid-cols-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Minority Scholarship</span>
                    <p>
                    The objective of the Minority Scholarship Scheme is to provide scholarships to meritorious students. Economically weaker sections of the minority community provide them with better higher education opportunities so that they can increase their employability by pursuing higher education.
                    </p>
                    <Link to={"/minority-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>Research Scholarship</span>
                    <p>
                    Research and scholarship means all forms of basic, applied and demonstration research, and all forms of scholarship and creative work in all fields and disciplines of scholarly inquiry, regardless of the presence or absence of external funding or sponsorship of the specific research or scholarship project.
                    </p>
                    <Link to={"/research-based-scholarships"}>
                    <Button variant="primary" style={{ width: "200px" }}>
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="grid-col-item">
              <Card>
                <Card.Body>
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div className="featured_info">
                    <span>All Scholarships</span>
                    <p>
                    a grant or payment made to support a student's education, awarded on the basis of academic or other achievement. A scholarship is financial support awarded to a student, based on academic achievement or other criteria that may include financial need, for the purpose of schooling.
                    
                    </p>
                    <Link to="/view-scholarships">
                    <Button variant="primary" style={{ width: "200px" }} >
                      View Scholarships
                    </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div></Row>
        </div>
      </section>
    </>
  );
};

export default ScholarshipTypes;
