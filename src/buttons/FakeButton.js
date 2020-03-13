import React, {Component} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class FakeButton extends Component {

    render() {
        return (

            <Container>
                <Col md={8} className="home-container">
                    <Row>FEW MORE CLICK AND YOU HAVE A NEW FAKE IDENTITY</Row>
                    <Row></Row>
                    <Row>JUST PRESS THE GENERATE BUTTON</Row>
                    <Row></Row>
                    <Row><Button variant="secondary" size="large">{<a href="/generate">GENERATE</a>}</Button></Row>
                    <Row></Row>
                    <Row>AND YOU CAN START TROLLING</Row>
                    <Row></Row>
                    <Row>WITH YOUR NEW FAKE IDENTITY!</Row>
                </Col>
            </Container>

        )
    }
}
export default FakeButton;
