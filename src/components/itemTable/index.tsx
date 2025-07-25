import ConfirmModal from '@components/confirmModal';
import { useToast } from '@hooks/useToast';
import { useItemStore } from '@store/itemStore';
import { useThemeStore } from '@store/themeStore';
import { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

interface ItemTableProps {
  onEdit: (itemId: number) => void;
}

const ItemTable = ({ onEdit }: ItemTableProps) => {
  const { addToast } = useToast();
  const items = useItemStore((state) => state.items);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const { isDarkMode, } = useThemeStore()

  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setItemToDelete(id);
  };

  const confirmDelete = () => {
    if (itemToDelete !== null) {
      deleteItem(itemToDelete);
      setItemToDelete(null);
      addToast('Item excluido com sucesso!', 'success');
    } 
  };

  return (
    <>
      <h4 className='mb-3'>Itens cadastrados</h4>
      <Table
        hover
        striped
        bordered
        responsive
        variant={isDarkMode ? 'dark' : 'light'}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Qtd.</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.nome}</td>
              <td>{item.descricao}</td>
              <td>{item.quantidade}</td>
              <td>R$ {item.preco.toFixed(2)}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => onEdit(item.id)}
                >
                  Editar
                </Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(item.id)}>
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
  );
};

export default ItemTable;
