import { useItemStore } from '@store/itemStore'
import React from 'react'
import { Table } from 'react-bootstrap'

const ItemList: React.FC = () => {
  const items = useItemStore((state) => state.items)

  if (items.length === 0){
    return <p>Nenhum item cadastrado ainda.</p>
  }

  return (
    <Table striped bordered hover responsive variant="dark">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.descricao}</td>
            <td>{item.quantidade}</td>
            <td>R$ {item.preco.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ItemList