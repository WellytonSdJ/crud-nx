import { useState } from 'react'
import ItemForm from '@components/itemForm'
import ItemTable from '@components/itemTable'
import type { Item } from '@models/item'
import { useItemStore } from '@store/itemStore'
import { Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  const items = useItemStore((state) => state.items)
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null)

  const handleEdit = (itemId: number) => {
    const item = items.find((i) => i.id === itemId) || null;
    setItemToEdit(item);
  }

  const onEditComplete = () => {
    setItemToEdit(null)
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Dashboard</h1>
      <Row>
        <Col md={5}>
          <ItemForm itemToEdit={itemToEdit}  onEditComplete={onEditComplete}/>
        </Col>
        <Col md={7}>
          <ItemTable onEdit={handleEdit}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard