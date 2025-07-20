import ConfirmModal from '@components/confirmModal';
import { useItemStore } from '@store/itemStore';
import React, { useState } from 'react'
import { Button, Table } from 'react-bootstrap';

const ItemTable: React.FC = () => {
  const items = useItemStore((state) => state.items);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const [itemToDelete, setItemToDelete] = useState<number | null>(null)

  const handleDelete = (id: number) => {
    setItemToDelete(id)
  }

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      deleteItem(itemToDelete)
      setItemToDelete(null)
    }
  }
  return (
    <>
      <h4>Itens Cadastrados</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Qtd.</th>
            <th>Preco</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.quantidade}</td>
              <td>{item.preco.toFixed(2)}</td>
              <td>
                <Button variant="danger" size='sm' onClick={() => handleDelete(item.id)}>
                  Excluir
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ConfirmModal
        show={itemToDelete !== null}
        onClose={() => setItemToDelete(null)}
        onConfirm={confirmDelete}
        message="Tem certeza que deseja excluir este item?"
      />
    </>
  )
}

export default ItemTable