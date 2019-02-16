import burl from '../url';

import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { Table } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }
  componentwillmount(){
    var data = [
      {
          "id": 1,
          "items": [
              {
                  "id": 2,
                  "name": "test",
                  "user": 28,
                  "price": 23.0,
                  "booked": false,
                  "start_time": "2019-02-19T12:34:40.640458Z",
                  "end_time": "2019-02-24T12:34:40.640458Z",
                  "description": "dsf",
                  "instructions": "sfsd",
                  "img": "/media/item/161567264216546p_Olh9HVv.jpeg",
                  "authorised": true,
                  "resource": 1
              }
          ],
          "category": "Seats",
          "img": "/media/161567264216546p.jpeg",
          "description": "these are seats"
      }

    }]

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">


            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
                <h6>description of cateogry</h6>
              </Col>
            </Row>

            <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Already booked</th>
            <th>Resource</th>
            <th>Check to book</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td><CustomInput type="checkbox" id="exampleCustomCheckbox" label="Check this custom checkbox" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}