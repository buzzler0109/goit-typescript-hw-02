import { Photo } from "../api/photos";
import css from "./ImageCard.module.scss";

interface ImageCardlProps {
  openModal: () => void;
  photo: Photo;
  getCard: (photo: Photo) => void;
}

const ImageCard: React.FC<ImageCardlProps> = ({
  photo,
  openModal,
  getCard,
}) => {
  const handleClick = () => {
    getCard(photo);
    openModal();
    console.log(photo);
  };

  return (
    <div>
      <img
        className={css.img}
        src={photo.urls.small}
        alt={photo.alt_description || "Image"}
        onClick={handleClick}
      />
    </div>
  );
};

export default ImageCard;
