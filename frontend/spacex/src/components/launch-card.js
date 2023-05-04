import React from 'react'
import { Button, Card, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {dateTimeUtcConverter} from '../datetime-converter'

const LaunchCard = (props) => {
  return (
    <Card variant="outlined" className="mb-3 mr-2">
      <Card.Body>
        <Row>
          <Col lg="auto" md="auto" sm={12}>
            <Image
              src={props.links?.patch?.small}
              style={{
                maxWidth: '100px'
              }}
            />
          </Col>
          <Col className='col-lg col-md col-sm-12'>
            <Row><span><strong>Mission - </strong>{props.name}</span></Row>
            <Row><span><strong>Flight Number - </strong>{props.flight_number}</span></Row>
            <Row><span><strong>Date/Time - </strong>{dateTimeUtcConverter(props.date_utc)}</span></Row>
          </Col>
          <Col className="m-auto text-right col-lg-auto col-md-auto col-sm-12">
            <Link to={`/launches/${props.id}`}>
              <Button style={{ width: 'unset' }}>
                Details
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
export default LaunchCard
