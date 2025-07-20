import { useState } from 'react'
import ItemForm from '@components/itemForm'
import ItemTable from '@components/itemTable'
import type { Item } from '@models/item'
import { useItemStore } from '@store/itemStore'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Dashboard = () => {
  const items = useItemStore((state) => state.items)
  const [itemToEdit, setItemToEdit] = useState<Item | null>(null)
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (itemId: number) => {
    const item = items.find((i) => i.id === itemId) || null;
    setItemToEdit(item);
    setShowForm(true);
  }

  const handleNewItem = () => {
    setItemToEdit(null);
    setShowForm(true);
  };

  const onEditComplete = () => {
    setItemToEdit(null);
    setShowForm(false);
  }

  return (
    <Container className="my-4 p-4 bg-white rounded shadow-sm">
      <h1 className="mb-4 fw-bold text-primary">Dashboard</h1>
      <Row className="align-items-center" style={{ paddingBottom: '0.5rem' }}>
        <Col>
          <p className="text-muted">Gerencie os itens cadastrados abaixo</p>
        </Col>
        <Col className="text-end">
          <Button variant="outline-primary" onClick={handleNewItem}>
            Novo Item
          </Button>
        </Col>
      </Row>

      <Col className="text-end">
      </Col>
      <Row>
        {showForm && (
          <Card>
            <Card.Body>
              <ItemForm itemToEdit={itemToEdit} onEditComplete={onEditComplete} />
            </Card.Body>
          </Card>
        )}

        {!showForm && <Col md={12}>
          <Card>
            <Card.Body>
              <ItemTable onEdit={handleEdit} />
            </Card.Body>
          </Card>
        </Col>}
      </Row>
    </Container>
  )
}

export default Dashboard