import { Fragment, useState, useEffect } from 'react';
import Loader from '../Loader';
import pixabayApi from '../../services/pixabayApi';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';

export default function ImageGallery(props) {
  const [stateImages, setStateImages] = useState([]);
  const [stateLargeImage, setStateLargeImage] = useState('');
  const [stateShowModal, setStateShowModal] = useState(false);
  const [stateIsLoading, setStateIsLoading] = useState(false);

  useEffect(() => {
    if (props.searchQuery) {
      setStateImages([]);
      fetchImages();
    }
  }, [props.searchQuery]);

  function fetchImages() {
    setStateIsLoading(true);

    setTimeout(() => {
      pixabayApi
        .getData(props.searchQuery, props.page)
        .then(data => {
          if (props.page === 1) {
            setStateImages(data.hits);
          } else {
            setStateImages(prevState => [...prevState, ...data.hits]);
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        })
        .finally(() => {
          setStateIsLoading(false);
          props.setPage(prevState => prevState + 1);
        });
    }, 200);
  }

  const openModal = largeImage => {
    setStateShowModal(true);
    setStateLargeImage(largeImage);
  };

  const closeModal = () => {
    setStateShowModal(false);
    setStateLargeImage('');
  };

  return (
    <Fragment>
      <ul className="ImageGallery">
        <ImageGalleryItem imageQuery={stateImages} openModal={openModal} />
      </ul>
      {stateImages.length === 0 && (
        <p>{`No images for your request "${props.searchQuery}"`}</p>
      )}
      {stateShowModal && (
        <Modal closeModal={closeModal} largeImage={stateLargeImage} />
      )}
      {stateIsLoading && <Loader />}
      {stateImages.length > 0 && <Button onPushButton={fetchImages} />}
    </Fragment>
  );
}
