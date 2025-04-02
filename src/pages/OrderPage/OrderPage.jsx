import { useParams } from 'react-router';

const OrderPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>order page {id}</div>;
};
export { OrderPage };
