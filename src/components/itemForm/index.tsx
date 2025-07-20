import { useItemStore } from '@store/itemStore'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const ItemForm: React.FC = () => {
  const addItem = useItemStore((state) => state.addItem)

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [preco, setPreco] = useState(0)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    addItem({
      id: Date.now(),
      nome,
      descricao,
      quantidade,
      preco
    })

    //resetar form
    setNome('')
    setDescricao('')
    setQuantidade(0)
    setPreco(0)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h4>Adicionar novo item</h4>
      <Form.Group className='mb-3'>
        <Form.Label>Nome</Form.Label>
        <Form.Control value={nome} onChange={(e)=> setNome(e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Descricao</Form.Label>
        <Form.Control value={descricao} onChange={(e)=> setDescricao(e.target.value)} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control type="number" value={quantidade} onChange={(e)=> setQuantidade(Number(e.target.value))} required/>
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Preco</Form.Label>
        <Form.Control type="number" value={preco} onChange={(e)=> setPreco(Number(e.target.value))} required/>
      </Form.Group>

      <Button type="submit">Salvar</Button>
    </Form>
  )
}

export default ItemForm