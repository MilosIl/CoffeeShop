const Button = ({ children, handleClick, className, icon }) => {
  return (
    <button
      onClick={handleClick}
      className={`${className} ${icon ? 'flex gap-3 items-center justify-center' : ''}  text-white`}
    >
      <span>{icon}</span>
      {children}
    </button>
  );
};
export { Button };
