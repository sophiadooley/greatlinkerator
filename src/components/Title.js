import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import ModalButton from "./ModalButton";

function Title() {
    return (
        <Container fluid style={{
            textAlign: "center",
            padding: "20px"}}>
            <Row>
                <Col>
                    <h1>
                        The Great Linkerator
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>A website to find great websites!</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalButton />
                </Col>
            </Row>
        </Container>
    )
}

export default Title;