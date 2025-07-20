import React from 'react'
import ItemList from '@components/itemList'
import { Container } from 'react-bootstrap'

export const Home: React.FC = () => {
  return (
    <Container className='my-4'>
      <h1 className='mb-4'>Lista de Itens</h1>
      <ItemList />
    </Container>

  )
}
