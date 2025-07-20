import { useItemStore } from '@store/itemStore'
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import type { Item } from '@models/item';

interface ItemFormProps {
  itemToEdit?: Item | null;
  onEditComplete?: () => void;
}

const ItemForm = ({ itemToEdit = null, onEditComplete }: ItemFormProps) => {
  const addItem = useItemStore((state) => state.addItem)
  const updateItem = useItemStore((state) => state.updateItem)

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState(0)
  const [preco, setPreco] = useState(0)

  useEffect(() => {
    if (itemToEdit) {
      setNome(itemToEdit.nome)
      setDescricao(itemToEdit.descricao)
      setQuantidade(itemToEdit.quantidade)
      setPreco(itemToEdit.preco)
    } else {
      limparForm();
    }
  }, [itemToEdit])

  const limparForm = () => {
    setNome('')
    setDescricao('')
    setQuantidade(0)
    setPreco(0)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (itemToEdit) {
      updateItem({
        ...itemToEdit,
        nome,
        descricao,
        quantidade,
        preco
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      onEditComplete && onEditComplete();
    } else {
      addItem({
        id: Date.now(),
        nome,
        descricao,
        quantidade,
        preco
      })
    }
    onEditComplete?.();
    limparForm()
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h4 className='mb-3'>{itemToEdit ? 'Editar Item' : 'Adicionar novo item'}</h4>
      <Form.Group className='mb-3'>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          placeholder="Digite o nome do item"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Descricao</Form.Label>
        <Form.Control
          placeholder="Digite a descrição do item"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Quantidade</Form.Label>
        <Form.Control
          placeholder="Digite o nome do item"
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
          required />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Preco</Form.Label>
        <Form.Control
          placeholder="Digite o nome do item"
          type="number"
          value={preco}
          onChange={(e) => setPreco(Number(e.target.value))}
          required />
      </Form.Group>

      <Button
        type="submit"
        variant='primary'
        disabled={!nome.trim() || quantidade < 0 || preco < 0}
      >
        {itemToEdit ? 'Salvar alterações' : 'Salvar'}

      </Button>
      {itemToEdit && (
        <Button
          variant="secondary"
          className='ms-2'
          onClick={() => {
            limparForm()
            onEditComplete?.();
          }}
          type='button'
        >
          Cancelar
        </Button>
      )}
    </Form>
  )
}

export default ItemForm