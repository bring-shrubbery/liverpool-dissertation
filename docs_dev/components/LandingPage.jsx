import React, {Component, Fragment} from 'react';
import NavigationBar from './NavigationBar.jsx';
import { Container, Row, Col } from 'reactstrap';

export default class LandingPage extends Component {

    render() {
        return (
            <Fragment>
                <NavigationBar/>
                <Container fluid>
                    <Row>
                        <Col sm="1"></Col>
                        <Col>
                            <h2>signals.js is a javascript framework oriented towards simplifying </h2>
                        </Col>
                        <Col sm="1"></Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}