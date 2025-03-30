import { IconCross } from '@/assets/icons/';
const ShopCartItem = ({ id, name, amount, onRemove }) => {
  return (
    <li
      className="flex justify-between items-center my-1 py-1 font-medium text-white"
      id={id}
      key={id}
    >
      <span>
        {amount} x {name}
      </span>
      <button
        className="font-semibold text-dark-blue text-base leading-6 tracking-tight"
        onClick={onRemove}
      >
        <IconCross />
      </button>
    </li>
  );
};

export { ShopCartItem };
