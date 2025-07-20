import { Button, Modal } from 'react-bootstrap';

interface ConfirmModalProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string
}

const ConfirmModal = ({ show, message, onClose, onConfirm }: ConfirmModalProps) => {
  return (
    <Modal show={show} onHide={onClose} centered animation>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar ação</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal