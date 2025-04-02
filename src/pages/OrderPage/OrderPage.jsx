import { useParams } from "react-router";

const OrderPage = ()=>{
  const { id } = useParams();
  return(
    <div>order page {id}</div>
  )
}
export { OrderPage };