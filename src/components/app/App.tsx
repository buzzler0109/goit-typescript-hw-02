import { useEffect, useState } from "react";
import Modal from "react-modal";

import SearchBar from "../search_bar/SearchBar";
import { getPhotos, Photo } from "../api/photos";
import LoadMoreBtn from "../load_more_btn/LoadMoreBtn";
import { Loader } from "../loader1/Loader";
import ImageGallery from "../image_gallery/ImageGallery";
import ImageModal from "../modal/ImageModal";

import css from "./App.module.scss";

const App = () => {
  Modal.setAppElement("#root");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<boolean>(false);
  const [allPhotos, setAllPhotos] = useState<boolean>(false);
  const [IsOpen, setIsOpen] = useState<boolean>(false);
  const [imageCard, setImageCard] = useState<null | Photo>(null);

  const onFormSubmit = (query: string) => {
    setLoading(true);
    setQuery(query);
    setPage(1);
    setPhotos([]);
    setErr(false);
    setAllPhotos(false);
  };

  useEffect(() => {
    if (!query) return;
    const photosFromAPI = async () => {
      try {
        const { results } = await getPhotos(query, page);
        if (results.length === 0) {
          setAllPhotos(true);
        } else {
          setPhotos((prevPhotos) => [...prevPhotos, ...results]);
          console.log(results);
        }
      } catch (err) {
        setErr(true);
      } finally {
        setLoading(false);
      }
    };
    photosFromAPI();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getCard = (photo: Photo) => {
    setImageCard(photo);
  };

  return (
    <div className="wrapper container form-body">
      <SearchBar onSubmit={onFormSubmit} />
      {err && (
        <p>
          Something went wrong... Please, reload the page or try a bit later!
        </p>
      )}
      {loading && <Loader status={loading} />}
      <ImageGallery photos={photos} openModal={openModal} getCard={getCard} />
      {photos.length === 0 && allPhotos && (
        <p className={css.endList}>
          Sorry, there are no matches! Try smth else
        </p>
      )}
      {photos.length > 0 &&
        ((allPhotos && <p className={css.endList}>That is all we have!</p>) || (
          <LoadMoreBtn onClick={onLoadMore}>Load more...</LoadMoreBtn>
        ))}
      <ImageModal
        closeModal={closeModal}
        photo={imageCard}
        // openModal={openModal}
        IsOpen={IsOpen}
      />
    </div>
  );
};

export default App;
