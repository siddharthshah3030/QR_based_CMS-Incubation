import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                        <Col sm={4}>
                            <ListGroup>
                                <ListGroup.Item action href="#link1">
                                    Que 1 ?
        </ListGroup.Item>
                                <ListGroup.Item action href="#link2">
                                    Que 2 ?
        </ListGroup.Item>
                                <ListGroup.Item action href="#link3">
                                    Que 3 ?
        </ListGroup.Item>
                                <ListGroup.Item action href="#link4">
                                    Que 4 ?
        </ListGroup.Item>
                                <ListGroup.Item action href="#link5">
                                    Que 5 ?
        </ListGroup.Item>
                                <ListGroup.Item action href="#link6">
                                    Que 6 ?
        </ListGroup.Item>
                            </ListGroup>

                        </Col>
                        <Col sm={8}>
                            <Tab.Content>
                                <Tab.Pane eventKey="#link1">
                                    ans 1  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
        </Tab.Pane>
                                <Tab.Pane eventKey="#link2">
                                    ans 2  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
                            
                </Tab.Pane>
                                <Tab.Pane eventKey="#link3">
                                    ans 3  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
                            
                </Tab.Pane>
                                <Tab.Pane eventKey="#link4">
                                    ans 4  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
                            
                </Tab.Pane>
                                <Tab.Pane eventKey="#link5">
                                    ans 5  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
                            
                </Tab.Pane>
                                <Tab.Pane eventKey="#link6">
                                    ans 6  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, asperiores aliquid! Ex quaerat error, aut optio sapiente, unde velit voluptate esse temporibus commodi iusto aspernatur nostrum ad expedita magnam ut.
                            
                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>;
                
   </div>
        );
    }

}
export default (DashBoard);