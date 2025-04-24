import { useParams } from 'react-router-dom';

const SingleView = ({ data }) => {
  const { id } = useParams();
  const product = data.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="pa4">
      <img src={product.image} alt={product.name} className="w-50" />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default SingleView;
