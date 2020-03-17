import React, {Component} from "react";
import {Container} from "react-bootstrap";
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";


class SecondFakeGenerate extends Component {

    render() {
        return (

            <Container>
                <Col md={8} className="home-container">
                    <Row>Oh shit, sorry, we still need to do some configuration, upload and deploy etc.</Row>
                    <Row></Row>
                    <Row>Just a few clicks and you will be ready to troll!</Row>
                    <Row></Row>
                    <Row>Click <Button variant="secondary" size="large" >{<a href="/fakebtn">GENERATE</a>}</Button></Row>
                    <Row>and everything is set!</Row>
                    <Row></Row>

                </Col>
            </Container>
        )

    }
}
export default SecondFakeGenerate;