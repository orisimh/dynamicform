export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  modalHeader: string;
}