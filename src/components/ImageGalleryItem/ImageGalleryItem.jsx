import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageQuery, openModal }) => {
  return (
    <>
      {imageQuery.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          className="ImageGalleryItem"
          key={id}
          onClick={() => openModal(largeImageURL)}
        >
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  imageQuery: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
