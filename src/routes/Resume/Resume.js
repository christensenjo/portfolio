import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderNav from "../../components/HeaderNav/HeaderNav.js";
import Footer from "../../components/Footer/Footer.js";
import "./Resume.css";

function App() {
    return (
      <Container className="App" fluid>
        <div className="ContentWrapper">
            <HeaderNav></HeaderNav>
            <div className="ResumeContent">
                <div className="CareerStatus">
                    <Row>
                        <Col>
                            <h1>Career Status</h1>
                            <p className="text-center">Text describing your current goals for your career or position you are seeking.</p>
                        </Col>
                    </Row>
                </div>

                <div className="WorkHistory">
                    <Row>
                        <Col>
                            <h1>Work History</h1>
                        </Col>
                    </Row>

                    <Row className="work-history-cards">
                        <Col md={6} lg={4}>
                            <p>work history here...</p>
                            {/* <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                                <Card.Body>
                                    <Card.Title>Full-Stack Web Developer at MaidenVoyage 2/23-Present</Card.Title>
                                    <Card.Text>Brief description of position.</Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col> 
                    </Row>
                </div>

                <div className="Education">
                    <Row>
                        <Col md={9}>
                            <h1>Education</h1>
                            <ul className="list-unstyled">
                                <li className="mt-3">
                                    <h5 className="mb-0">Bachelor of Science in Computer Science</h5>
                                    <p className="text-secondary">Utah State University</p>
                                    <p className="text-secondary">Computer Science, Economics minor -- 3.85 GPA</p>
                                    <p className="text-secondary">Logan, UT -- Dec 2022</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div className="Experience">
                    <Row>
                        <h1>Highlighted Software Engineering Experience</h1>
                        <Col md={9}>
                            <ul className="list-unstyled">
                            <li>
                                <h5 className="mb-0">Software Engineer</h5>
                                <p className="text-secondary">Microsoft Corporation</p>
                                <p className="text-secondary">Redmond, WA</p>
                                <p className="text-secondary">June 2021 - Present</p>
                                <ul className="list-unstyled">
                                <li>Developed new features for Microsoft Teams using React and Redux.</li>
                                <li>Collaborated with designers to implement new UI components using Tailwind CSS.</li>
                                <li>Improved performance of Microsoft Teams by optimizing React components.</li>
                                </ul>
                            </li>
                            <li className="mt-3">
                                <h5 className="mb-0">Software Engineering Intern</h5>
                                <p className="text-secondary">Amazon Web Services (AWS)</p>
                                <p className="text-secondary">Seattle, WA</p>
                                <p className="text-secondary">June 2020 - September 2020</p>
                                <ul className="list-unstyled">
                                <li>Developed a new feature for AWS Lambda using Java and AWS SDK.</li>
                                <li>Collaborated with team members to design and implement new REST APIs.</li>
                                <li>Improved performance of AWS Lambda by optimizing Java code.</li>
                                </ul>
                            </li>
                            </ul>
                        </Col>
                    </Row>
                </div>

                <div className="Skills">
                    <Row>
                        <Col md={3} className="font-weight-bold">
                            Skills
                        </Col>
                        <Col md={9}>
                            <ul className="list-unstyled">
                            <li>JavaScript (ES6+)</li>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>HTML & CSS</li>
                            <li>Tailwind CSS</li>
                            <li>Bootstrap</li>
                            </ul>
                        </Col>
                    </Row>    
                </div>

                <div className="Leadership">
                    <Row>
                        <Col md={9}>
                            <h1>Leadership & Service</h1>
                            <ul className="list-unstyled">
                                <li>Volunteer at local food bank</li>
                                <li>Organized charity event for local animal shelter</li>
                                <li>Member of student council</li>
                            </ul>
                        </Col>
                    </Row> 
                </div>

            </div>
        </div>
        <Footer></Footer>
      </Container>
    );
  }
  
  export default App;