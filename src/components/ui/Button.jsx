export const Button = ({ label, handleClick, classNames }) => {
  return (
    <button onClick={handleClick} className={`${classNames}`}>
      {label}
    </button>
  );
};
