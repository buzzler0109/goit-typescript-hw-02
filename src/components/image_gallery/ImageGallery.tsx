import { Photo } from "../api/photos";
import ImageCard from "../image_card/ImageCard";

import css from "./ImageGallery.module.scss";

interface ImageGalleryProps {
  openModal: () => void;
  getCard: (photo: Photo) => void;
  photos: Photo[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
  photos,
  openModal,
  getCard,
}) => {
  return (
    <ul className={css.list}>
      {photos.map((photo) => (
        <li className={css.listItem} key={photo.id}>
          <ImageCard photo={photo} openModal={openModal} getCard={getCard} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
