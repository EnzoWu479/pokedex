import ReactModal from "react-modal";
import FadeIn from "react-fade-in";

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: (arg0: boolean) => void;
  onClose?: () => void;
}
interface Props extends ModalProps {
  children: React.ReactNode;
}
export default ({ isOpen, setIsOpen, onClose, children }: Props) => {
  const handleClose = () => {
    if (onClose) onClose();
    setIsOpen(false);
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      ariaHideApp={false}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "0",
          backgroundColor: "transparent",
          overflow: "hidden",
        },
        overlay: {
          background: "#0005",
        },
      }}
    >
      <FadeIn>{children}</FadeIn>
    </ReactModal>
  );
};
