import React, {Component} from "react";
import './GenerateTroll.css';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import {CardColumns} from "react-bootstrap";
import {Card} from "react-bootstrap";
import Loading from "../Loading";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://vlqa98lh03.execute-api.eu-west-1.amazonaws.com/trolli';

class GenerateTroll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'userdata': [],
            'jokes': [],
       /*     loading: true*/
        }
    }
    componentDidMount() {

        const url = API_BASE_URL + '/henkilo';
        const url2 = API_BASE_URL + '/trollivitsi';
        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({'userdata': response}))


        fetch(url2, {method: 'GET'})
            .then(response => response.json())
            .then(response => this.setState({'jokes': response})
/*            this.setState(prevState => ({
            loading: !prevState.loading*/
     /*   })*/)
    }

    render() {
/*        if (this.state.loading) {
            return (
                <Loading/>)
        }*/
        return (
                <Container>
                    <CardColumns>
                        <Card>
                            <a href={this.state.userdata.pic}><Card.Img variant="top" src={this.state.userdata.pic}/></a>
                            <Card.Body>
                                <Card.Title><b>{this.state.userdata.name} {this.state.userdata.lastname}</b></Card.Title>
                                <Card.Text className="user-details">
                                    <Row>
                                        {this.state.userdata.userAge} years
                                    </Row>
                                    <Row>
                                        {this.state.userdata.city}, {this.state.userdata.country}
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    {this.state.userdata.value}
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone famous in <cite title="Source Title">US Covernment</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                        <Card className="p-3">
                            <blockquote className="blockquote mb-0 card-body">
                                <p>
                                    {this.state.jokes.setup}<br/>
                                    {this.state.jokes.punchline}
                                </p>
                                <footer className="blockquote-footer">
                                    <small className="text-muted">
                                        Someone funny <cite title="Source Title">somewhere</cite>
                                    </small>
                                </footer>
                            </blockquote>
                        </Card>
                    </CardColumns>
                    <button onClick={() => window.location.reload(false)}>Click to regenerate</button>
                </Container>

        )
    }
}

export default GenerateTroll;
