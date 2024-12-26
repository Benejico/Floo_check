import PropTypes from 'prop-types';

function Card({ name, image, used, onToggle }) {
  return (
    <div className="card-container">
      {used && <div className="diagonal-line" />}
      <img 
        src={image} 
        className={`card${used ? ' used' : ''}`} 
        alt={name} 
        onClick={onToggle}
      />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  used: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default Card;