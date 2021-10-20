import PropTypes from 'prop-types';

const Button = ({ onPushButton }) => {
  return (
    <button type="button" className="Button" onClick={onPushButton}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onPushButton: PropTypes.func.isRequired,
};

export default Button;
