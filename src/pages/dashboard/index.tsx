import ItemForm from '@components/itemForm'
import ItemTable from '@components/itemTable'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Dashboard: React.FC = () => {
  return (
    <Container className="my-4">
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col md={5}>
          <ItemForm/>
        </Col>
        <Col md={7}>
          <ItemTable/>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard