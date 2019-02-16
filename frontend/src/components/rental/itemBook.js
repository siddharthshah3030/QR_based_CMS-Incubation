import React from 'react';
import { Table } from 'reactstrap';
import { CustomInput, Form, FormGroup, Label } from 'reactstrap';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
      let data =   [
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
        },
        {
            "id": 1,
            "name": "ge",
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
    ]

    return (
        <div>
      <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>description</th>
            <th>available</th>
            <th>price</th>
            <th>quanitity</th> 
            <th>Book</th> 
        </tr>
        </thead>
        <tbody>

        {data.map(e=>(

          <tr>
            <th scope="row">{e.id}</th>
            <td>{e.name}</td>
            <td>{e.description}</td>
            <td>{e.booked}</td>
            <td>{e.price}</td>
            <td>{e.resource}</td>
            <td>
                <CustomInput type="checkbox" id={e.id} label="" />
                </td>

          </tr>

        ))}

        </tbody>
      </Table>
              <Button color="primary">Submit Order</Button>{' '}
</div>
    );
  }
}