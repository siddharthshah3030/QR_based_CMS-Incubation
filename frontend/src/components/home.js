import React, { Component } from "react";

import { Switch, Route, withRouter } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck';

// import {CardDeck, Row , Col , ListGroup, Tab } from 'react-bootstrap';

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>

                <Jumbotron>
                    <h1>36INC</h1>
                    <p>
                        Now Startups and Professionals can have an office space with world class facilities
  </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>;
<CardDeck>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Co-Working Space
</Card.Title>
                            <Card.Text>
                                Ideate while competing, Learn with other startups, Get a swanky office for your team, An address to flaunt.
                          
</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Work at our place</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Fab Lab
</Card.Title>
                            <Card.Text>
                                Our well-equipped FABLAB with a separate access is not just for our incubatees.
                          
content.{' '}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">furnished lab </small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        <Card.Body>
                            <Card.Title>Funding</Card.Title>
                            <Card.Text>
                                We know that what water is to a plant, money is to startups! We have funding options for all stages of startups
                          
                          
      </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">need funding? join us</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>;
                
   </div>
        );
    }

}
export default (DashBoard);