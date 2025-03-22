const Button = ({ children, handleClick, className }) => {
  return (
    <button onClick={handleClick} className={`${className}`}>
      {children}
    </button>
  );
};
export { Button };
