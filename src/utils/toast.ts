import { toast } from 'react-toastify';

type ToastProps = {
  text: string;
  status: 'success' | 'error';
};

const Toast = ({ text, status }: ToastProps) => {
  if (status === 'error') {
    return toast.error(text, {
      style: { backgroundColor: '#343b41', color: '#F8F9FA' },
    });
  }

  return toast.success(text, {
    style: { backgroundColor: '#343b41', color: '#F8F9FA' },
  });
};

export default Toast;
