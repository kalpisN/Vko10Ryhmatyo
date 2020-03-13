import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Blink from "react-blink-text";

class FirstFakeGenerate extends Component {

    render() {
        return(
            <Container>
                <Col md={8} className="home-container">
                    <Row>Sorry, we need some time for configuration...</Row>
                    <Row>Just a few clicks and you will get your fake identity.</Row>
                    <Row>This app will even generate a "favorite quote" for your fake identity</Row>
                    <Row>and also, if you are having hard time on coming up with jokes, don't worry,</Row>
                    <Row>also one joke will be generated for you.</Row>
                    <Row><Blink color='blue' text={<a href="/2fake">CLICK HERE</a>} fontsize='20'></Blink></Row>
                    <Row>and everything is set!</Row>
            </Col>
            </Container>
        )
    }

}

export default FirstFakeGenerate;