import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className="header">
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <h2 className="logo">โๅฝก๐ ๐ฏ๐ฒ๐ก๐ด๐ฆ๐ฑ๐ฅ๐๐ญ๐ฆๅฝกโ</h2>
                    </Col>
                    <Col md={8}><Menu /></Col>
                </Row>
            </Container>
        </div>
    )
}


export default Header;