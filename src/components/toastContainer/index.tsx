import { Toast } from 'react-bootstrap';
import { useToast } from '@hooks/useToast';

const ToastContainer = () => {
  const { toasts, removeToast } = useToast();
  
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      className="position-fixed top-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          onClose={() => removeToast(toast.id)}
          bg={toast.type === 'success' ? 'success' : 'danger'}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">
              {toast.type === 'success' ? 'Sucesso' : 'Erro'}
            </strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      ))}
    </div>
  );
};

export default ToastContainer;
