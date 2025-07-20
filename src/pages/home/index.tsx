import React from 'react'
import ItemList from '@components/itemList'
import { Container } from 'react-bootstrap'

const Home: React.FC = () => {
  return (
    <Container className="my-4 p-4 bg-white rounded shadow-sm">
      <h1 className='mb-4 fw-bold text-primary'>Lista de Itens</h1>
      <ItemList />
    </Container>
    
    

  )
}

export default Home