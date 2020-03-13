import React, {Component} from "react";
import './FirstFakeGenerate';
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import './Home.css';
import './FirstFakeGenerate';
import Blink from 'react-blink-text';


class Home extends Component {
    render() {
        return (

            <Container>
                <Col md={8} className="home-container">
                    <Row className="first-line">PLANNING ON TROLLING ON THE INTERNET?</Row>
                    <Row>Having hard time on coming up with a fake name?</Row>
                    <Row>Don't worry, WE HAVE A PERFECT SOLUTION FOR YOU!</Row>
                    <Row>We will make you a fake identity with name, age, city, country,</Row>
                    <Row>and email address and even send you all the information via email!</Row>
                    <Row>CLICK THE TROLL TO START TROLLING</Row>
                    <Row>WITH YOUR NEW FAKE IDENTITY!</Row>
                    <Row><Blink color='blue' text={<a href="/fake"><iMG className="trollikuva" src="troll.png"/></a>}></Blink></Row>

                </Col>
            </Container>

        )
    }
}

export default Home;