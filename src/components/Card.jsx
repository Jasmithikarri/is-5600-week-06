import { Link } from 'react-router-dom';

const Card = ({ id, name, image, description }) => {
  return (
    <Link to={`/product/${id}`} className="link dim">
      <div className="card pa3 ma2 ba b--black-10 shadow-1">
        <img src={image} alt={name} className="w-100" />
        <h2>{name}</h2>
        <p>{description.slice(0, 100)}...</p>
      </div>
    </Link>
  );
};

export default Card;
