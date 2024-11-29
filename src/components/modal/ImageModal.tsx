import Modal from "react-modal";

import css from "./ImageModal.module.scss";
import { Photo } from "../api/photos";

interface ImageModalProps {
  closeModal: () => void;
  IsOpen: boolean;
  photo: Photo | null;
}

const ImageModal: React.FC<ImageModalProps> = ({
  closeModal,
  IsOpen,
  photo,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "gray",
    },
  };
  return (
    <div>
      <Modal isOpen={IsOpen} onRequestClose={closeModal} style={customStyles}>
        {photo && (
          <div>
            <img
              className={css.modalPhoto}
              src={photo.urls.regular}
              alt={photo.alt_description || "Image"}
            />
            <div className={css.modalWrap}>
              <img
                className={css.author}
                src={photo.user.profile_image.medium}
                alt={photo.user.username}
              />
              <p>Author: {photo.user.username}</p>
              <p>likes:{photo.likes}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
