import React, { Component } from 'react'
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle
} from 'reactstrap';
import QrCode from './qrcode'

import dashboard from './dashboard';
export default class staff_home extends Component {


    render() {
        var data = {
            name: "Siddharth Saw",
            startUp: "Cooldude",
            startUpLink: "link",
            bookingsLink: "link",
            aboutMe: "i am great and damn awesome",
            userLink: "Link"

        }
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{data.name}</CardTitle>
                        <CardSubtitle>{data.startUp}</CardSubtitle>
                    </CardBody>
                    <img width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardText>{data.aboutMe}</CardText>
                        <CardLink href={dashboard.startUpLink}>Startup Link</CardLink>
                        <CardLink href={data.bookingsLink}>Bookings Link</CardLink>
                    </CardBody>
                    <QrCode handler_qr_data={data.userLink} />
                </Card>

            </div>
        )
    }
}